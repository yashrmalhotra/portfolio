# Yash Ram Malhotra - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation & Running Locally

1. **Clone or download this project** to your local machine

2. **Navigate to the project directory**
   ```bash
   cd yash-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Or use Vite directly:
   ```bash
   npx vite
   ```

5. **Open your browser** and go to:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── hero-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── education-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   ├── pages/              # Page components
│   │   ├── home.tsx        # Main portfolio page
│   │   └── not-found.tsx   # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🛠️ Built With

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icons
- **React Icons** - Technology logos
- **Wouter** - Lightweight routing

## ✨ Features

- ⚡ **Fast Development** - Hot module replacement with Vite
- 📱 **Responsive Design** - Works on all device sizes
- 🎨 **Modern UI** - Clean, professional design with glass effects
- 🔧 **Technology Skills** - Visual display with official technology logos
- 📧 **Contact Information** - Social media links and professional contact details
- 🚀 **Optimized Build** - Production-ready build with Vite
- 🎯 **No Backend Required** - Pure frontend portfolio, no server dependencies

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking

## 🌐 Deployment

To deploy this portfolio:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting
   - Any web server

## 🎯 Customization

To customize this portfolio for yourself:

1. Update personal information in the components:
   - `src/components/hero-section.tsx` - Name, title, description
   - `src/components/skills-section.tsx` - Your skills and technologies
   - `src/components/experience-section.tsx` - Work experience
   - `src/components/projects-section.tsx` - Your projects
   - `src/components/contact-section.tsx` - Contact information and social links

2. Replace the resume PDF in `attached_assets/` with your own

3. Modify colors and styling in `src/index.css` and component files

## 📄 License

This project is open source and available under the MIT License.