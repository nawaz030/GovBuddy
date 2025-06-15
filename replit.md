# GovBuddy - Government Scheme Discovery Platform

## Overview

GovBuddy is a full-stack web application that helps Indian citizens discover government schemes and benefits tailored to their personal profile. The platform uses a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM. It provides personalized scheme recommendations based on user demographics including age, income, occupation, gender, and state of residence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with middleware for JSON parsing, CORS, and request logging
- **API Design**: RESTful endpoints for scheme matching, contact forms, and scheme retrieval
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware

### Database Architecture
- **Database**: PostgreSQL (configured via Replit modules)
- **ORM**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage**: In-memory storage implementation with interface for easy database integration

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with mobile menu support
2. **Profile Form**: Multi-step form for collecting user demographics
3. **Results Display**: Card-based layout showing matched schemes with filtering
4. **Contact Form**: User feedback and inquiry submission
5. **UI Components**: Comprehensive set of accessible components (buttons, forms, modals, etc.)

### Backend Components
1. **Route Handlers**: 
   - `/api/schemes` - Get all available schemes
   - `/api/match` - Match schemes based on user profile
   - `/api/contact` - Submit contact forms
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Validation Layer**: Zod schemas for data validation
4. **Middleware**: Request logging, error handling, and JSON parsing

### Shared Components
- **Schema Definitions**: Zod schemas shared between frontend and backend
- **Type Definitions**: TypeScript interfaces for data structures

## Data Flow

1. **User Profile Collection**: User fills out demographic form with validation
2. **Scheme Matching**: Profile data sent to backend for matching against scheme database
3. **Result Display**: Matched schemes returned and displayed with category filtering
4. **Application**: Users can access external application links for matched schemes
5. **Contact**: Optional contact form for user feedback and support

## External Dependencies

### Runtime Dependencies
- **Frontend**: React ecosystem, Radix UI, TanStack Query, React Hook Form
- **Backend**: Express.js, Drizzle ORM, Zod validation
- **Database**: PostgreSQL with Neon serverless driver
- **Styling**: Tailwind CSS, class-variance-authority for component variants

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Development**: tsx for TypeScript execution, Replit integration

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with Replit modules (nodejs-20, web, postgresql-16)
- **Development Server**: Vite dev server with HMR on port 5000
- **Database**: PostgreSQL 16 via Replit modules

### Production Deployment
- **Build Process**: 
  1. Vite builds the client-side application
  2. esbuild bundles the server code
- **Deployment Target**: Replit Autoscale deployment
- **Port Configuration**: External port 80 mapping to internal port 5000
- **Environment**: Production mode with optimized builds

### Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Asset Handling**: Static file serving with proper MIME types

## Changelog

```
Changelog:
- June 15, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```