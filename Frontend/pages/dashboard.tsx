import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Dashboard = () => {
  const { data: session } = useSession();

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