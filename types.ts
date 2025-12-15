import { LucideIcon } from 'lucide-react';

export interface CardData {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  icon: LucideIcon;
  theme: 'sage' | 'salmon' | 'sky' | 'gold';
  footer: string;
}