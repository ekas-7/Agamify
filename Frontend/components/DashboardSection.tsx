import React from 'react'

interface DashboardSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section className={`dashboard-section ${className}`}>
      {(title || subtitle) && (
        <div className="section-header">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}

      <style jsx>{`
        .dashboard-section {
          margin-bottom: 60px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header h2 {
          color: #333;
          margin-bottom: 10px;
        }

        .section-header p {
          color: #666;
        }
      `}</style>
    </section>
  )
}

export default DashboardSection
