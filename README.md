# Luis Isaia - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and embedded live project viewing.

## Features

- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Mobile First** - Fully responsive design
- 🎨 **Modern UI** - Beautiful animations with Framer Motion
- 🚀 **Live Projects** - View projects directly in the portfolio
- ⚡ **Fast Performance** - Optimized with Next.js 14
- ♿ **Accessible** - Built with accessibility in mind

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Contact Information**: Update email, LinkedIn, and GitHub links in:
   - `app/components/Hero.tsx`
   - `app/components/Contact.tsx`
   - `app/components/Footer.tsx`

2. **Projects**: Edit the projects array in `app/components/Projects.tsx`

3. **Experience**: Update experience data in `app/components/Experience.tsx`

4. **Skills**: Modify skill levels in `app/components/Skills.tsx`

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── components/       # React components
│   ├── providers/        # Context providers
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
└── ...config files
```

## License

MIT License - feel free to use this portfolio as a template for your own!


