# Miniclay AI - Product Requirements Document

## Original Problem Statement
Build a modern, clean, futuristic landing page for "Miniclay AI — Autonomous Meeting Assistant" with design inspiration from:
- **interviewcoder.co**: Professional SaaS layout with social proof, testimonials, feature cards, and conversion-focused elements
- **TRIMGO**: Bold metallic typography (chrome/gradient effect), minimalist dark aesthetic, centered hero with depth

**Key Requirements**:
- Must NOT look AI-generated
- Use TRIMGO-style bold metallic text for hero title
- Professional, conversion-optimized layout like successful SaaS products
- Human-designed feel with personality and intentional design choices

## User Personas
- **Creators & Founders**: Need AI assistance in meetings to focus on strategic work
- **Remote Teams**: Require intelligent meeting participation and documentation
- **Innovators & Early Adopters**: Seeking cutting-edge AI collaboration tools

## Architecture & Tech Stack
- **Frontend**: React 19 with React Router
- **Styling**: Custom CSS (no design system/framework constraints)
- **Icons**: Lucide React
- **Typography**: Inter font family
- **Theme**: Dark background (#0a0a0b) with electric blue accents (#0EA5E9)

## Design System Applied
**Typography**:
- Hero title: 140px bold with metallic chrome gradient effect
- Responsive scaling with clamp()
- Mixed font weights (400-900) for natural hierarchy

**Color Palette**:
- Background: #0a0a0b (warm black, not pure black)
- Secondary BG: #141416
- Accent: Electric Blue (#0EA5E9) - not neon green
- Text: White/Gray scale for readability

**Layout Philosophy**:
- Asymmetric sections to avoid AI-feel
- Professional SaaS structure (Hero → Trust bar → Features → How it works → Testimonials → CTA → FAQ → Footer)
- Generous spacing and padding
- Grid backgrounds with masking
- Card-based components with hover effects

## Core Requirements (Completed ✅)

### Phase 1: Complete Redesign with Human Touch
**Hero Section** ✅
- EST. 2026 badge with pulsing dot
- Large "MINICLAY AI" with metallic gradient (TRIMGO-inspired)
- "Your Autonomous AI Meeting Bot" subtitle
- Clear description paragraph
- Dual CTAs: Primary "Launch" + Ghost "See How It Works"
- Animated grid background

**Trust Bar** ✅
- "Trusted by innovators at" copy
- Company logo placeholders (Google, Microsoft, Slack, Zoom, Amazon)

**Features Section** ✅
- 4 feature cards in responsive grid
- Icon with background glow (electric blue accent)
- Feature title & description
- Check-list items for each feature
- Hover lift effects

**How It Works** ✅
- Two-column layout (steps + demo placeholder)
- Numbered steps (01, 02, 03) with blue accent
- Demo video placeholder with play icon

**Testimonials** ✅
- 3-column grid of testimonial cards
- Star ratings (★★★★★)
- Quote text
- Author avatar (initials) + name + role

**CTA Section** ✅
- Gradient background
- Large headline
- Primary CTA button

**FAQ Accordion** ✅
- Collapsible FAQ items
- Smooth expand/collapse animations
- Chevron icon rotation
- 4 common questions answered

**Footer** ✅
- Brand name + tagline
- Contact/Learn More link
- Social media icons (Twitter, LinkedIn, GitHub)
- Copyright notice

## What's Been Implemented (January 6, 2026)

### Phase 2: Redesigned Professional Landing Page ✅
**Date**: January 6, 2026

**Created Files**:
- `/app/frontend/src/components/LandingPage.jsx` - Complete rewrite with modern structure
- `/app/frontend/src/components/LandingPage.css` - Custom professional CSS (no design system)
- Updated `/app/frontend/src/App.js` for routing
- Updated `/app/frontend/src/index.css` with custom variables

**Design Features Implemented**:
1. ✅ Metallic chrome typography for hero (TRIMGO-style)
2. ✅ Dark professional aesthetic (not pure black)
3. ✅ Electric blue accent color (conversion-focused)
4. ✅ Professional SaaS layout structure
5. ✅ Hover interactions and micro-animations
6. ✅ Fully responsive (mobile-first approach)
7. ✅ FAQ accordion with smooth animations
8. ✅ Social proof elements (trust bar, testimonials)
9. ✅ Multiple CTA placements for conversion
10. ✅ Grid background effects

**Key Differentiat ors from AI-generated sites**:
- Mixed font sizes and weights (not uniform)
- Asymmetric layouts in sections
- Custom spacing (not algorithmic)
- Real testimonial structure with avatars
- Professional copy (not generic AI text)
- Thoughtful color choices (blue, not purple/pink)
- Hover states with intentional timing
- FAQ accordion (interactive element)

## Prioritized Backlog

### P0 Features (Must Have)
- [x] Metallic hero text effect (TRIMGO-style)
- [x] Professional SaaS layout
- [x] FAQ accordion
- [x] Trust bar with company logos
- [ ] Replace placeholder product URL
- [ ] Add real company logos
- [ ] Replace testimonial avatars with photos

### P1 Features (Should Have)
- [ ] Add demo video (currently placeholder)
- [ ] Implement smooth scroll navigation
- [ ] Add SEO meta tags
- [ ] Google Analytics integration
- [ ] Add favicon and OG image
- [ ] Add email capture form
- [ ] Implement pricing section (if needed)

### P2 Features (Nice to Have)
- [ ] Add case studies section
- [ ] Blog integration
- [ ] Live chat widget
- [ ] A/B testing for CTA variants
- [ ] Add more testimonials
- [ ] Create additional pages (About, Pricing, etc.)

## Technical Notes
- No backend needed for MVP (static landing page)
- All links use "#" placeholders
- State management: React useState for FAQ accordion
- Animations: CSS-only (no JS animation library)
- Mobile breakpoints: 768px, 968px
- Performance: Optimized with clamp() for responsive typography

## Design Inspiration Sources
1. **interviewcoder.co**: Professional structure, social proof, testimonials, comparison tables
2. **TRIMGO**: Metallic/chrome typography, minimalist dark theme, bold centered text
3. **Modern SaaS Best Practices**: Trust bars, multiple CTAs, FAQ sections, conversion optimization

## Next Tasks
1. Get actual product URL from user
2. Replace company logo placeholders with real SVG logos
3. Add actual demo video
4. Get real testimonials with photos
5. Optimize for SEO (meta tags, structured data)
6. Test conversion rates and iterate on copy
7. Add email capture for lead generation

---
*Last Updated: January 6, 2026*
*Design Phase: Complete Redesign - Human-Designed, Non-AI Look*
