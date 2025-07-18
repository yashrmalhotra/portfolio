# Portfolio Website - Full Stack Application

## Overview

This is a full-stack portfolio website for Yash Ram Malhotra, a Full Stack Developer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers. Built with a modern tech stack including React frontend, Express.js backend, and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.
Skills display preference: Technology logos instead of skill level indicators.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend concerns:

- **Frontend**: React with TypeScript in the `client/` directory
- **Backend**: Express.js server in the `server/` directory  
- **Shared**: Common schemas and types in the `shared/` directory
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **UI**: shadcn/ui component library with Tailwind CSS

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error middleware
- **Development**: Hot reload with tsx

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, name, email, message, createdAt)
- **Migration System**: Drizzle Kit for database migrations

### UI/UX Design
- **Design System**: Modern, professional portfolio design
- **Theme**: Light/dark mode support with CSS variables
- **Responsive**: Mobile-first responsive design
- **Components**: Modular component architecture with reusable UI elements
- **Animations**: Smooth transitions and hover effects

## Data Flow

1. **Portfolio Display**:
   - Static content rendered from component data
   - Skills, experience, and projects displayed in dedicated sections
   - Smooth scrolling navigation between sections
   - Contact information displayed with social media links

2. **Navigation**:
   - Client-side routing with Wouter
   - Smooth scroll to sections within single page
   - Responsive mobile navigation

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Library**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: Lucide React, React Icons
- **State Management**: TanStack React Query
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js, Node.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Development**: tsx, esbuild
- **Session**: connect-pg-simple (for PostgreSQL sessions)

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Frontend build tool with HMR
- **ESBuild**: Backend bundling for production
- **Drizzle Kit**: Database migration management

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized production bundle to `dist/public/`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Setup
- **Development**: Uses `NODE_ENV=development` with hot reload
- **Production**: `NODE_ENV=production` with static file serving
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Considerations
- Designed for deployment on platforms like Vercel, Netlify, or Railway
- Static assets served from `dist/public/` in production
- API routes prefixed with `/api/` for clear separation
- Environment-specific configurations in place

The architecture supports both development flexibility and production scalability, with clear separation of concerns and modern tooling throughout the stack.

## Recent Changes

### July 18, 2025
- Built complete portfolio website based on Yash Ram Malhotra's resume
- Implemented skills section with technology logos (JavaScript, TypeScript, React, Node.js, MongoDB, Redis, Docker, etc.)
- Created experience section highlighting Avtechfin internship
- Added projects section featuring GreatMart and Inventory Management System
- **MAJOR RESTRUCTURE**: Converted from full-stack to frontend-only portfolio
  - Removed all backend dependencies (Express, PostgreSQL, Drizzle ORM)
  - Removed TanStack Query and database functionality  
  - Removed all toast/messaging functionality including contact forms
  - Removed form handling dependencies (react-hook-form, zod validation)
  - Restructured project to run on Vite dev server only
  - Moved client files to root level for simpler structure
  - Created standalone React application that can run locally with `npm run dev`
- Fixed "Illegal constructor" error by implementing inline navigation component
- Contact section now displays only contact information and social media links
- User confirmed preference for frontend-only portfolio with no message functionality
- **SECOND RESTRUCTURE**: Converted from React to pure HTML/CSS/JavaScript
  - Converted entire React application to static HTML, CSS, and JavaScript
  - Replaced all React components with vanilla HTML and CSS
  - Added smooth scrolling navigation and interactive animations
  - Created responsive design with modern styling
  - Implemented simple Node.js static file server for deployment
  - **Technology Logos**: Replaced emoji placeholders with authentic SVG logos
    - React: Authentic React atom logo with orbital rings
    - Node.js: Official Node.js hexagonal logo
    - JavaScript: Official JS badge with yellow background
    - TypeScript: Official TS badge with blue background  
    - MongoDB: Official MongoDB leaf logo
    - Redis: Official Redis logo with stacked layers
    - Docker: Official Docker whale logo with containers
    - AWS: Official Amazon Web Services logo