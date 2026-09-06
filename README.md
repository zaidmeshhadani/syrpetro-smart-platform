# 🏛️ SYRPETRO Smart Platform

> **Syria International Petroleum, Energy & Mineral Wealth Expo**  
> Organized by **Meshhadani International Group**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform Status](https://img.shields.io/badge/Status-Development-blue.svg)](#)
[![Language: AR/EN](https://img.shields.io/badge/Language-AR%2FEN-red.svg)](#)

---

## 📋 Project Overview

**SYRPETRO Smart Platform** is a comprehensive digital ecosystem designed to enhance visitor and exhibitor experiences at Syria's premier petroleum and energy exhibition. The platform integrates cutting-edge technologies with the visual identity of Meshhadani International Group.

### 🎯 Core Objectives

1. **Visitor Engagement** - Interactive hall maps, digital passes, and AI-powered search
2. **Lead Capture** - Smart exhibitor portal with real-time lead scoring
3. **Real-time Analytics** - Organizer command center with live traffic monitoring
4. **Seamless Integration** - WhatsApp automation, QR codes, and CRM connectivity

---

## 🎨 Visual Identity

The platform is built with **Meshhadani International Group's** branding:

- **Primary Color**: `#C41E3A` (Deep Red/Crimson)
- **Secondary Color**: `#F77F00` (Gold/Orange)
- **Typography**: Segoe UI (English) + Cairo (Arabic)

All UI components, buttons, and design elements follow this color scheme and branding guidelines.

---

## 📱 Platform Modules

### 1. 👥 **Visitor Experience App**
- Pre-registration with WhatsApp integration
- Dynamic QR Code passes
- Interactive hall maps with real-time navigation
- Digital handshake (booth-to-visitor engagement)
- Post-expo interactive brief

### 2. 🏢 **Exhibitor Portal**
- Badge QR scanner for lead capture
- Lead scoring system (Hot/Warm/Cold)
- CRM integration
- Excel export & analytics
- Real-time dashboard

### 3. 🎛️ **Organizer Command Center**
- Real-time visitor analytics
- Hall traffic heatmaps
- Support ticket management
- Exhibitor performance tracking
- Walk-in registration

### 4. 🤖 **AI Expo Concierge**
- Natural language product search
- Exhibitor discovery by sector/country
- Intelligent booth recommendations
- Privacy-compliant interest tracking

---

## 📍 Exhibition Halls

### Hall 1 (قاعة 1)
- **Size**: 1,500 m²
- **Booths**: 35
- **Features**: Lecture Hall (208 m²), VIP Lounge, B2B Area
- **Key Sponsors**: ENOC, Novaterra Energy, ConocoPhillips

### Hall 2 (قاعة 2)
- **Size**: 1,800 m²
- **Booths**: 40
- **Focus**: Lubricants, Energy, Industrial Machinery
- **Key Sponsors**: Oscar Lubricants, LUKOIL, Bizol

### Hall 25 (قاعة 25)
- **Size**: 2,000 m²
- **Booths**: 45
- **Features**: Main Registration, Press Room, Services
- **Key Sponsors**: SPC, UCC Holding, Chamco Petroleum

**Total Exhibition Area**: 5,300 m² | **Total Booths**: 120

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/zaidmeshhadani/syrpetro-smart-platform.git
cd syrpetro-smart-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
syrpetro-smart-platform/
├── src/
│   ├── config/
│   │   ├── branding.ts        # Color & typography configuration
│   │   └── platform-structure.ts
│   ├── styles/
│   │   ├── branding.css       # Global branding styles
│   │   └── main.css
│   ├── modules/
│   │   ├── visitor/           # Visitor app module
│   │   ├── exhibitor/         # Exhibitor portal module
│   │   ├── organizer/         # Organizer command center
│   │   └── ai-concierge/      # AI search engine
│   ├── app.js
│   └── index.html
├── data/
│   ├── exhibitions/           # Hall layouts & booth data
│   ├── sponsors/              # Sponsor information
│   └── exhibitors/            # Exhibitor database
├── docs/
│   └── SYRPETRO_Expo_Full_Data_and_Visuals.md
├── assets/
│   ├── logo/
│   ├── icons/
│   └── images/
├── package.json
└── README.md
```

---

## 🎨 Branding Guidelines

All components should follow Meshhadani's visual identity:

```typescript
// Example: Using branding colors in components
import BrandingConfig from '@/config/branding';

const buttonStyle = {
  backgroundColor: BrandingConfig.colors.primary.main,    // #C41E3A
  color: BrandingConfig.colors.accent.white,
  fontFamily: BrandingConfig.typography.fontFamily.primary,
};
```

---

## 📊 Key Features

✅ **Multi-lingual Support** (Arabic/English)  
✅ **Real-time Analytics**  
✅ **WhatsApp Integration**  
✅ **QR Code Generation & Scanning**  
✅ **Responsive Design**  
✅ **Dark Mode Support**  
✅ **Mobile-First Approach**  
✅ **CRM Integration Ready**  

---

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, TypeScript/JavaScript
- **Backend Ready**: Node.js, Express.js
- **Database**: MongoDB/PostgreSQL (to be implemented)
- **APIs**: WhatsApp Business API, QR Code Library
- **Analytics**: Real-time event tracking
- **Deployment**: Docker, CI/CD ready

---

## 📝 Documentation

Detailed documentation is available in the `/docs` folder:

- [`SYRPETRO_Expo_Full_Data_and_Visuals.md`](docs/SYRPETRO_Expo_Full_Data_and_Visuals.md) - Complete expo data and hall layouts
- Hall floor plans with booth configurations
- Sponsorship tiers and partner information
- Platform architecture diagrams

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 📞 Contact & Support

**Meshhadani International Group**  
📧 Email: info@meshhadani.com  
🌐 Website: www.meshhadani.com  
📱 Phone: [Contact Information]

---

## 🙏 Acknowledgments

Special thanks to:
- All exhibitors and sponsors
- The Meshhadani International Group team
- Contributors and developers
- The petroleum and energy sector partners

---

**Made with ❤️ for SYRPETRO 2027**
