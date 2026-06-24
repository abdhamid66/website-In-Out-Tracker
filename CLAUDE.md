# CLAUDE.md — In-Out Tracker Website

## Project Overview

* Name: In-Out Tracker Website
* Description: Professional product website and landing page for In-Out Tracker, a personal finance tracking application that helps users record income and expenses, monitor financial activity, and improve money management.
* Goal: Build a modern, premium, and conversion-focused website that showcases the In-Out Tracker mobile application through app mockups, feature highlights, screenshots, benefits, FAQs, testimonials, and download call-to-actions.
* Target Users:

  * Students
  * Small business owners
  * Freelancers
  * Employees
  * Personal finance enthusiasts
  * Individuals who want simple expense tracking
* Version: v1.0.0
* Status: Active Development

Business Goals:

* Increase awareness of In-Out Tracker.
* Present the application professionally.
* Provide clear information about features.
* Encourage application downloads.
* Build credibility and trust.
* Serve as official product documentation.

---

## Tech Stack

* Language: TypeScript
* Framework: Next.js 15+
* Styling: Tailwind CSS
* UI Library: shadcn/ui
* Icons: Lucide React
* Animations: Framer Motion
* State Management: Zustand
* Data Fetching: Native Fetch API
* Forms: React Hook Form
* Validation: Zod
* Image Optimization: Next/Image
* Package Manager: npm
* Deployment: Vercel
* SEO: Next Metadata API
* Analytics: Google Analytics 4
* Fonts: Inter

Never use:

* Bootstrap
* jQuery
* Material UI
* Inline CSS

---

## Commands

### Development

npm run dev

### Build

npm run build

### Production

npm run start

### Lint

npm run lint

### Format

npm run format

### Type Check

npm run type-check

### Testing

npm run test

### E2E

npm run test:e2e

### Package Management

npm install [package]

Never use:

* yarn
* pnpm
* bun

---

## Project Structure

Architecture: Feature-Based Architecture

src/

app/

* page.tsx
* layout.tsx
* loading.tsx
* not-found.tsx

components/

common/

* Button
* Badge
* SectionTitle
* Container

layout/

* Header
* Footer
* MobileMenu

sections/

* HeroSection
* AppMockupSection
* FeaturesSection
* BenefitsSection
* ScreenshotsSection
* HowItWorksSection
* TestimonialsSection
* StatisticsSection
* FAQSection
* DownloadSection
* ContactSection

ui/

* shadcn components

lib/

* utilities
* helper functions

constants/

* website data
* navigation
* feature lists

types/

* TypeScript types

hooks/

* custom hooks

services/

* api functions

public/

images/

* app screenshots
* mockups
* feature images

icons/

seo/

Aturan:

* UI reusable di components/common
* Section landing page di components/sections
* Utility functions di lib
* Types di types
* Data statis di constants
* Jangan membuat folder baru tanpa konfirmasi

---

## Naming Conventions

### Files

PascalCase:

* HeroSection.tsx
* FeatureCard.tsx

camelCase:

* formatCurrency.ts
* getFeatureData.ts

### Folder

kebab-case

contoh:

* feature-card/
* app-showcase/

### Variables

camelCase

contoh:

* totalIncome
* totalExpense
* monthlyBalance

### Constants

UPPER_SNAKE_CASE

contoh:

* APP_NAME
* WEBSITE_URL
* MAX_FEATURES

### Interfaces

PascalCase

contoh:

* Feature
* Testimonial
* AppScreenshot

### Git Branch

feat/new-section

fix/navbar-bug

refactor/hero-layout

---

## Code Conventions

### General Rules

* Follow Clean Code.
* Follow DRY principle.
* Follow SOLID principle.
* Prefer readability over clever code.
* Avoid code duplication.

### TypeScript

* Strict mode enabled.
* No any type allowed.
* Explicit return types required.
* Use interfaces for objects.
* Use type for unions.

### Imports Order

1. External packages
2. Internal aliases
3. Relative imports
4. Types
5. Styles

### Exports

* Named export preferred.
* Default export only for page.tsx and layout.tsx.

### Error Handling

* Use try-catch.
* User-friendly error messages.
* Never leave unhandled promises.

---

## Component Rules

Component Structure:

1. Imports
2. Types
3. Component
4. Hooks
5. Functions
6. JSX
7. Export

Props Rules:

* Explicit typing required.
* Default values for optional props.
* Maximum 10 props.

Reusable Components:

* Create reusable components whenever possible.
* Avoid duplicate UI patterns.

---

## Styling Rules

### Design Style

Premium SaaS Landing Page

### Visual Direction

* Clean
* Modern
* Elegant
* Professional
* Fintech Inspired

### Color Palette

Primary:
#4F46E5

Secondary:
#6366F1

Accent:
#22C55E

Background:
#FFFFFF

Dark:
#0F172A

Text:
#1E293B

Muted:
#64748B

### Border Radius

* 16px
* 24px

### Shadows

* Soft shadows only
* No harsh shadows

### Responsive

Mobile First

Breakpoints:

* sm
* md
* lg
* xl
* 2xl

### Images

Always use:

next/image

Never use:

img tag

---

## Website Sections

### Hero Section

Contains:

* Product headline
* Product description
* CTA buttons
* Phone mockup
* Download button

### App Mockup Section

Displays:

* Mobile screens
* Dashboard preview
* Expense tracker preview
* Income tracker preview

### Features Section

Features:

* Income Tracking
* Expense Tracking
* Transaction History
* Financial Reports
* Monthly Summary
* Balance Monitoring
* Category Management
* User Friendly Interface

### Benefits Section

Benefits:

* Better financial control
* Easy expense management
* Track spending habits
* Improve budgeting
* Increase savings awareness

### Screenshots Section

Display:

* Real application screenshots
* Device mockups

### How It Works

Step 1:
Record income

Step 2:
Record expenses

Step 3:
Monitor balance

Step 4:
Review reports

### Statistics Section

Show:

* Total transactions
* Total income
* Total expenses
* Monthly trends

### FAQ Section

Minimum 8 FAQs

### Download Section

CTA for:

* Google Play
* APK Download

### Footer

Contains:

* Navigation
* Contact
* Copyright
* Social Media

---

## SEO Rules

Required:

* Meta title
* Meta description
* Open Graph
* Twitter Card
* Structured Data

Target Keywords:

* expense tracker
* income tracker
* personal finance app
* budgeting app
* money management app
* finance tracker

---

## Performance Rules

Lighthouse Target:

* Performance 95+
* Accessibility 95+
* Best Practices 95+
* SEO 100

Image Rules:

* WebP format
* Optimized images
* Lazy loading

Bundle Rules:

* Dynamic imports
* Tree shaking
* Minimize dependencies

---

## Git Rules

Commit after every completed task.

Commit Types:

feat:
fix:
docs:
refactor:
style:
test:
chore:

Examples:

feat: add hero section

feat: add app mockup gallery

feat: implement FAQ section

fix: improve mobile navigation

---

## Features

Completed:

* [x] Product Landing Page
* [x] Hero Section
* [x] Features Section
* [x] App Mockup Gallery
* [x] FAQ Section
* [x] Responsive Layout
* [x] SEO Optimization

In Progress:

* [ ] Testimonials
* [ ] Blog Section

Planned:

* [ ] Multi-language Support
* [ ] User Reviews Integration
* [ ] Analytics Dashboard

---

## Testing

Testing Type:

* Manual Testing
* Integration Testing

Framework:

* Playwright

Test Coverage:

* Navigation
* CTA Buttons
* Mobile Responsiveness
* FAQ Interaction
* Download Links
* Forms

Target Coverage:

80%

---

## Do Not

* Do not create folders without confirmation.
* Do not install packages without confirmation.
* Do not use Bootstrap.
* Do not use jQuery.
* Do not use Material UI.
* Do not use inline styles.
* Do not use any type.
* Do not hardcode URLs.
* Do not remove existing sections.
* Do not modify design system without approval.
* Do not commit secrets.
* Do not expose API keys.
* Do not use low-quality stock images.
* Do not use generic landing page templates.

---

## Environment Variables

NEXT_PUBLIC_SITE_URL
Official website URL

NEXT_PUBLIC_GA_ID
Google Analytics ID

NEXT_PUBLIC_APP_NAME
Application name

NEXT_PUBLIC_PLAYSTORE_URL
Play Store URL

NEXT_PUBLIC_APK_URL
APK download URL

SERVER_SECRET
Internal server secret

GOOGLE_ANALYTICS_SECRET
Analytics configuration

Never expose server secrets to client-side code.
