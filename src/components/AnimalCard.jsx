import { ArrowUpRight } from "lucide-react";

export default function AnimalCard({ animal, onSelect }) {
  return (
    <button className="animal-card" onClick={() => onSelect(animal.id)}>
      <span className={`animal-emoji animal-${animal.id}`}>{animal.emoji}</span>
      <span className="animal-category">{animal.category}</span>
      <strong>{animal.name}</strong>
      <span className="animal-description">{animal.description}</span>
      <span className="card-link">Ver orientações <ArrowUpRight size={16} /></span>
    </button>
  );
}