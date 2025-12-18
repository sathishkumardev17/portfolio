# Sathish Portfolio Website

A production-grade, fully optimized React portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Performance Optimized**: Code splitting, lazy loading, and memoization
- **Dynamic & Config-Driven**: All content managed through configuration files
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Sticky Header**: With shadow-on-scroll effect
- **Scroll-to-Top**: Smooth fade-in/out animation
- **SEO Optimized**: Meta tags and semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── ScrollToTop/
│   ├── SectionTitle/
│   ├── ServiceCard/
│   ├── ExperienceCard/
│   ├── ProjectCard/
│   ├── PricingCard/
│   └── BlogCard/
├── sections/              # Page sections
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Experience/
│   ├── Projects/
│   ├── Testimonials/
│   ├── Pricing/
│   ├── Blog/
│   └── Contact/
├── data/                  # Configuration files
│   ├── navigation.ts
│   ├── hero.ts
│   ├── services.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── pricing.ts
│   ├── testimonials.ts
│   ├── blog.ts
│   └── contact.ts
└── utils/                 # Utility functions
    ├── hooks.ts           # Custom React hooks
    └── animations.ts      # Animation variants
```

## 🎨 Customization

All content is managed through configuration files in the `src/data/` directory:

- **Navigation**: Edit `navigation.ts` to update menu items
- **Hero Section**: Modify `hero.ts` for hero content
- **Services**: Update `services.ts` to change service offerings
- **Experience**: Edit `experience.ts` for work history
- **Projects**: Manage `projects.ts` for portfolio projects
- **Pricing**: Update `pricing.ts` for pricing plans
- **Blog**: Edit `blog.ts` to add blog posts
- **Contact**: Modify `contact.ts` for contact information

## 🎯 Key Features

### Performance Optimizations
- ✅ Component-level code splitting
- ✅ Lazy loading of heavy sections
- ✅ React.memo for stable components
- ✅ Debounced scroll listeners
- ✅ Intersection observers for animations
- ✅ Optimized re-renders

### Animations
- ✅ Fade in/out effects
- ✅ Slide animations (up, left, right)
- ✅ Scale animations
- ✅ Stagger animations for lists
- ✅ Scroll-triggered animations
- ✅ Smooth page transitions

### Responsive Design
- ✅ Mobile-first approach
- ✅ Hamburger menu for mobile
- ✅ Flexible grid layouts
- ✅ Touch-friendly interactions
- ✅ Optimized for all screen sizes

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sathish** - Senior UI Engineer

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS



