'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSection from "@/components/DashboardSection";
import RepositoryImporter from "@/components/RepositoryImporter";
import RepositoryGrid from "@/components/RepositoryGrid";
import { useRepositories } from "@/hooks/useRepositories";
import styles from "./page.module.css";
import React from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { repositories, loading, importRepository, deleteRepository } = useRepositories();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  const handleRepositoryImport = async (githubRepo: any) => {
    try {
      await importRepository(githubRepo);
      alert(`✅ Successfully imported ${githubRepo.name}!`);
    } catch (error) {
      console.error('Import error:', error);
      alert(`❌ Failed to import repository: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleMigrate = (repository: any) => {
    // TODO: Implement migration logic
    alert(`🚀 Migration for ${repository.name} will be implemented soon!`);
  };

  const handleDelete = async (repository: any) => {
    if (confirm(`Are you sure you want to remove "${repository.name}" from your imported repositories? This action cannot be undone.`)) {
      try {
        await deleteRepository(repository.id);
        alert(`✅ Successfully removed ${repository.name} from your imports!`);
      } catch (error) {
        console.error('Delete error:', error);
        alert(`❌ Failed to remove repository: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  };
  if (status === "loading") {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }
  return (
    <div>
      <Navbar />
      <div className={styles.dashboardContainer}>
        <DashboardHeader />
        
        <DashboardSection>
          <RepositoryImporter onImport={handleRepositoryImport} />
        </DashboardSection>

        <DashboardSection 
          title="📚 Your Imported Repositories"
          subtitle="Repositories you've imported for framework migration"
        >
          <RepositoryGrid 
            repositories={repositories}
            loading={loading}
            onMigrate={handleMigrate}
            onDelete={handleDelete}
          />
        </DashboardSection>
      </div>
    </div>
  );
}
