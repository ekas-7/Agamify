import React from 'react';

interface CardProps {
    title: string;
    content: string;
    actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, actions }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
            {actions && <div className="actions">{actions}</div>}
        </div>
    );
};

export default Card;