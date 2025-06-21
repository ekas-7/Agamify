import React from 'react'
import { useSession } from 'next-auth/react'

const DashboardHeader: React.FC = () => {
  const { data: session } = useSession()

  return (
    <div className="dashboard-header">
      <h1>Welcome back, {session?.user?.name}! 👋</h1>
      <p>Manage your repositories and migrate between frameworks seamlessly.</p>

      <style jsx>{`
        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 40px 0;
        }

        .dashboard-header h1 {
          color: #333;
          margin-bottom: 10px;
          font-size: 2.5rem;
        }

        .dashboard-header p {
          color: #666;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .dashboard-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default DashboardHeader
