import React from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import './ValueCard.css';

interface ValueCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <Card shadow="none" className="value-card" aria-label={title}>
    <CardHeader className="value-card-header">
      <span>{icon}</span>
    </CardHeader>
    <CardBody className="value-card-body">
      <h2 className="value-title">{title}</h2>
      <p className="value-description">{description}</p>
    </CardBody>
  </Card>
);

export default ValueCard;
