'use client';

import React from 'react';

interface CardProps {
    title: string;
    content: string;
    actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, actions }) => {
    return (
        <div 
            style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '1rem'
            }}
        >
            <h2 style={{ marginTop: 0, marginBottom: '0.8rem' }}>{title}</h2>
            <p style={{ color: '#666', marginBottom: actions ? '1rem' : 0 }}>{content}</p>
            {actions && <div style={{ marginTop: '1rem' }}>{actions}</div>}
        </div>
    );
};

export default Card;
