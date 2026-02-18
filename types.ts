
// Fix: Import React to resolve React namespace error for React.ReactNode
import React from 'react';
import { Icons } from './constants';

export enum Language {
  FR = 'FR',
  EN = 'EN',
  MG = 'MG'
}

export enum SectionTheme {
  AGRICULTURE = 'forest',
  PEDAGOGY = 'solar',
  EVENT = 'earth'
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  location: 'France' | 'Madagascar';
  excerpt: string;
  content: string; // Nouveau champ pour le détail
  iconKey: keyof typeof Icons;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  category: SectionTheme;
  description: string;
  image: string;
}
