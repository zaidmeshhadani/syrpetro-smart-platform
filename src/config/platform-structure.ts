/**
 * SYRPETRO Smart Platform - Core Architecture Configuration
 */

export const PlatformStructure = {
  // Platform Modules
  modules: {
    visitor: {
      name: 'Visitor Experience Platform',
      description: 'Mobile-first visitor app with interactive maps and digital pass',
      features: [
        'Pre-Registration & WhatsApp QR Pass',
        'Interactive Hall Maps & Navigation',
        'Digital Handshake (Badge QR)',
        'Booth Information & Exhibitor Details',
        'Post-Expo Interactive Brief',
      ],
    },
    exhibitor: {
      name: 'Exhibitor Portal',
      description: 'Lead capture and CRM integration for exhibitor staff',
      features: [
        'Lead Scanner (Badge QR Scanning)',
        'Lead Scoring (Hot/Warm/Cold)',
        'Staff CRM Integration',
        'Excel Export & Analytics',
        'Real-time Lead Dashboard',
      ],
    },
    organizer: {
      name: 'Organizer Command Center',
      description: 'Real-time expo management and analytics dashboard',
      features: [
        'Real-time Visitor Analytics',
        'Hall Traffic Heatmap',
        'Support Ticket Management',
        'Exhibitor Performance Tracking',
        'Walk-in Registration',
      ],
    },
    ai: {
      name: 'AI Expo Concierge',
      description: 'Natural language search and intelligent recommendations',
      features: [
        'Product/Service Search',
        'Booth Location Discovery',
        'Exhibitor Filtering (by country, sector)',
        'Interest Tracking & Analytics',
        'Post-Expo Insights',
      ],
    },
  },

  // Exhibition Halls
  halls: [
    {
      id: 'hall-1',
      name: 'قاعة 1',
      totalBooths: 35,
      totalArea: 1500,
      features: ['Lecture Hall', 'VIP Lounge', 'B2B Area', 'Prayer Rooms'],
      keySponsors: ['ENOC', 'Novaterra Energy', 'ConocoPhillips'],
    },
    {
      id: 'hall-2',
      name: 'قاعة 2',
      totalBooths: 40,
      totalArea: 1800,
      features: ['Lubricants Zone', 'Energy Sector', 'Industrial Machinery', 'B2B Area'],
      keySponsors: ['Oscar Lubricants', 'LUKOIL', 'Bizol'],
    },
    {
      id: 'hall-25',
      name: 'قاعة 25',
      totalBooths: 45,
      totalArea: 2000,
      features: ['Main Registration', 'Press Room', 'Energy Anchors', 'Services'],
      keySponsors: ['SPC (Syrian Petroleum Holding)', 'UCC Holding', 'Al-Badr Institute'],
    },
  ],

  // Sponsorship Tiers
  sponsorshipTiers: [
    {
      tier: 'Platinum',
      area: '90-100 m²',
      benefits: [
        'Premium booth placement',
        'Logo on platform',
        'Lead scanner integration',
        'Marketing materials',
      ],
    },
    {
      tier: 'Gold',
      area: '70-80 m²',
      benefits: [
        'Prime hall location',
        'Platform presence',
        'Basic analytics',
        'Networking events',
      ],
    },
    {
      tier: 'Diamond (ماسي)',
      area: '35-50 m²',
      benefits: [
        'Strategic placement',
        'Digital listing',
        'Visitor engagement',
      ],
    },
    {
      tier: 'Supporting',
      area: '20-40 m²',
      benefits: ['Booth listing', 'Platform access', 'Basic support'],
    },
  ],
};

export default PlatformStructure;