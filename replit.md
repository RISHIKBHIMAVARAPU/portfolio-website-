# Portfolio Website

## Overview

This is a full-stack portfolio website built with React.js frontend and Express.js backend. The application showcases a professional portfolio with contact form functionality, featuring modern UI components and a clean, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundle compilation

### Database Strategy
- **Development**: In-memory storage implementation for rapid prototyping
- **Production Ready**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema**: User management and contact message storage

## Key Components

### Frontend Components
1. **Portfolio Page**: Single-page application with multiple sections
   - Hero section with professional introduction
   - About section with personal and professional details
   - Skills section with categorized technical abilities
   - Projects section showcasing key work
   - Experience section with professional timeline
   - Contact section with interactive form
   - Navigation with smooth scrolling

2. **UI System**: Comprehensive component library including:
   - Form controls (Input, Textarea, Button, etc.)
   - Layout components (Card, Dialog, Sheet, etc.)
   - Feedback components (Toast, Progress, etc.)
   - Data display components (Badge, Avatar, etc.)

### Backend Components
1. **API Routes**: RESTful endpoints for contact form submission
2. **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations
3. **Middleware**: Request logging, error handling, and static file serving

### Contact Form System
- Form validation using Zod schemas
- Real-time form state management with React Hook Form
- Server-side validation and error handling
- Success/error feedback via toast notifications
- Contact message persistence

## Data Flow

### Contact Form Submission
1. User fills out contact form (firstName, lastName, email, subject, message)
2. Frontend validates form data using Zod schema
3. Data submitted via TanStack Query mutation to `/api/contact`
4. Backend validates data again and stores message
5. Success/error response sent back to frontend
6. Toast notification displays result to user

### Development vs Production
- Development: Uses in-memory storage for quick iteration
- Production: Configured for PostgreSQL database with Drizzle ORM
- Automatic database migration support via `drizzle-kit`

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Backend**: Express.js, CORS handling
- **Database**: Drizzle ORM, PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **State Management**: TanStack Query for server state
- **Development Tools**: Vite, TypeScript, tsx

### Development Dependencies
- Replit-specific plugins for development environment integration
- PostCSS and Autoprefixer for CSS processing
- ESBuild for production server compilation

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- Express server with middleware mode integration
- Automatic TypeScript compilation
- Development-specific error overlays and debugging tools

### Production Build Process
1. Frontend: Vite builds React application to `dist/public`
2. Backend: ESBuild compiles TypeScript server to `dist/index.js`
3. Static file serving from build directory
4. Environment variable configuration for database connection

### Database Configuration
- Uses `DATABASE_URL` environment variable
- Drizzle migrations stored in `./migrations` directory
- Schema definitions in `shared/schema.ts` for type safety across frontend/backend
- Support for connection to Neon serverless PostgreSQL

### Hosting Considerations
- Express server serves both API routes and static frontend assets
- Single deployment artifact with both frontend and backend
- Environment-based configuration for different deployment targets
- CORS and security middleware configured for production use