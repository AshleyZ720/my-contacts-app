# Next.js Contact Management App

A modern, responsive contact management application built with Next.js, TypeScript, and Tailwind CSS. The application fetches contact data from JSONPlaceholder API and displays it in a responsive grid layout that adapts to different screen sizes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The application will start running at [http://localhost:3000](http://localhost:3000) (or another available port if 3000 is in use).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Runs the linter to check for code style issues

## Project Structure

```
contacts-app/
├── app/                    # Next.js app directory
│   ├── contacts/          # Contacts page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ContactCard.tsx    # Contact display component
│   ├── ContactsGrid.tsx   # Grid layout for contacts
│   └── ui/               # UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── services/             # API services
└── types/                # TypeScript type definitions
```

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components

## Responsive Design Implementation

The application implements responsive design through several key approaches:

1. **Tailwind CSS Breakpoints**
   - Mobile-first design using Tailwind's responsive breakpoints
   - `sm`: 640px and up
   - `md`: 768px and up
   - `lg`: 1024px and up
   - `xl`: 1280px and up

2. **Grid Layout System**
   - Responsive grid using CSS Grid and Flexbox
   - Auto-adjusting columns based on screen width:
     ```css
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
     ```
   - Consistent spacing with dynamic gap sizing

3. **Component Adaptability**
   - Contact cards adjust size based on viewport
   - Flexible typography using responsive font sizes
   - Dynamic padding and margins using Tailwind's spacing scale

4. **Media Query Optimization**
   - Strategic breakpoints for optimal viewing across devices
   - Content reflow for different screen orientations
   - Touch-friendly on mobile devices

5. **Performance Considerations**
   - Lazy loading of images
   - Optimized assets for different screen sizes
   - Minimal layout shift during loading
   - Initial data fetch latency on first "Browse Contacts" click due to API cold start
   - Loading state feedback during data fetching

## Development Notes

- The application uses Next.js 15.4.1
- TypeScript is configured for type checking
- Tailwind CSS is used for styling and responsive design
- ESLint is configured for code linting
- Implements mobile-first responsive design principles
- Fetches data from JSONPlaceholder API (/users endpoint)
- Optimized for various screen sizes and devices
- No Create/Update/Delete operations implemented (read-only) 