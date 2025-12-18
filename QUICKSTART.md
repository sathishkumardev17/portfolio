# Quick Start Guide

Get your portfolio up and running in 3 minutes!

## 🚀 Fast Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

That's it! Your portfolio is now running.

## 📝 Customize Your Portfolio

### Step 1: Update Personal Information

Edit `src/data/hero.ts`:
```typescript
export const heroData = {
  greeting: 'Hello,',
  name: 'I Am [Your Name].',
  title: '[Your Title]',
  // ... update other fields
};
```

### Step 2: Update Services

Edit `src/data/services.ts`:
```typescript
export const servicesData: Service[] = [
  {
    id: 'service-1',
    title: 'Your Service Name',
    description: 'Your service description',
    // ...
  },
];
```

### Step 3: Update Work Experience

Edit `src/data/experience.ts`:
```typescript
export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    period: '2020 - Present',
    role: 'Your Role',
    company: 'Your Company',
    // ...
  },
];
```

### Step 4: Update Projects

Edit `src/data/projects.ts`:
```typescript
export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project',
    category: 'Category',
    // ...
  },
];
```

### Step 5: Update Contact Information

Edit `src/data/contact.ts`:
```typescript
export const contactData = {
  title: 'Your Contact Title',
  email: 'your@email.com',
  phone: 'your-phone',
  location: 'Your Location',
  // ...
};
```

## 🎨 Customize Design

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YourColor',
  'primary-dark': '#YourDarkColor',
  // ...
}
```

### Change Fonts

Edit `src/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
```

## 📦 Deploy

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy .next folder to Netlify
```

## 🎯 What's Included

✅ **10 Sections**:
- Hero with animated profile
- About with advantages
- Services showcase
- Work experience timeline
- Projects with filtering
- Client testimonials
- Pricing plans
- Blog/News section
- Contact form
- Footer with links

✅ **Components**:
- Sticky header with smooth scroll
- Mobile hamburger menu
- Scroll to top button
- Animated cards
- Loading states
- 404 page

✅ **Features**:
- Fully responsive
- Smooth animations
- Fast performance
- SEO optimized
- Type-safe
- Dark theme

## 📚 Documentation

- `README.md` - Overview
- `SETUP.md` - Detailed setup
- `ARCHITECTURE.md` - Technical details
- `FEATURES.md` - Complete feature list

## 🆘 Common Issues

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
```

### Animations not smooth?
- Check browser performance
- Disable browser extensions
- Try Chrome/Edge

## 🎓 Next Steps

1. ✅ Customize all data files
2. ✅ Add your images to `public/images/`
3. ✅ Update metadata in `src/app/layout.tsx`
4. ✅ Test on mobile devices
5. ✅ Deploy to hosting
6. ✅ Add analytics (optional)
7. ✅ Set up custom domain

## 💡 Pro Tips

1. **Images**: Add your actual images to `public/images/` and update image paths
2. **Favicon**: Replace favicon in `public/`
3. **Analytics**: Add Google Analytics ID in layout
4. **SEO**: Update meta descriptions for better rankings
5. **Performance**: Run Lighthouse audit before deploying

## 🌟 Showcase Features

Try these interactions:
- Scroll down and watch animations
- Click filter buttons in Projects section
- Navigate testimonials carousel
- Open mobile menu
- Scroll down and see the "Scroll to Top" button
- Hover over cards and buttons

## ⚡ Build for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm start

# Check build size
npm run build -- --analyze
```

## 🎉 You're All Set!

Your pixel-perfect portfolio is ready. Customize the content, add your images, and deploy!

Need help? Check the other documentation files.

---

**Happy coding!** 🚀



