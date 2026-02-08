import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center px-4 animate-fade-in">
      <div className="mb-4 feature-icon">{icon}</div>
      <h3 className="font-serif font-semibold text-lg mb-3 text-heading">{title}</h3>
      <p className="text-body text-sm max-w-xs">{description}</p>
    </div>
  );
};

export default FeatureCard;
