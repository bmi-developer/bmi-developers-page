/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  iconName: string; // Used to reference Lucide icons dynamically
  features: string[];
  technologies: string[];
}

export interface Metric {
  id: string;
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  segment: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  projectTypes: string[];
  budget: string;
  description: string;
  status: 'new' | 'contacted' | 'resolved';
  createdAt: string;
  estimation?: {
    estimatedWeeks: number;
    estimatedCost: string;
    teamSize: number;
  };
}

export interface EstimationState {
  productType: 'web' | 'mobile' | 'both' | 'custom';
  complexity: 'low' | 'medium' | 'high';
  timeline: 'normal' | 'express';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'process' | 'tech' | 'cost' | 'security';
}
