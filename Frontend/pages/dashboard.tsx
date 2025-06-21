import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import React from "react";

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session) {
      router.push("/"); // Redirect to home page if not authenticated
    }
  }, [session, status, router]);

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard content if user is not authenticated
  if (!session) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <h1>Welcome to your Dashboard, {session?.user?.name}</h1>
      <div className="grid">
        <Card title="Card 1" content="Content for card 1" />
        <Card title="Card 2" content="Content for card 2" />
        <Card title="Card 3" content="Content for card 3" />
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;