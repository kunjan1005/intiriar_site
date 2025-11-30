# Miirus Website

A modern, responsive React website for showcasing interior design projects including residential homes and corporate offices.

## Features

- **Modern Design**: Clean, elegant design with smooth animations
- **React 18 LTS**: Built with the latest stable React version
- **Component-Based**: Modular React components for easy maintenance
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Gallery**: Showcase your residential and corporate projects with filtering
- **Contact Form**: Easy-to-use contact form for client inquiries
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Professional Sections**: About, Services, Portfolio, and Contact sections

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. Build for production:
```bash
npm run build
```

## Project Structure

```
website/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js              # Main App component
│   ├── App.css
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## Customization

### Adding Your Images

Replace the placeholder images by:
1. Adding your project images to `public/images` folder
2. Update the image placeholders in components (e.g., `Portfolio.js`, `About.js`) with `<img>` tags:
```jsx
<img src="/images/your-image.jpg" alt="Project Name" />
```

### Changing Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #d4af37;
    --accent-color: #34495e;
}
```

### Updating Content

- Edit text content in component files (e.g., `About.js`, `Services.js`)
- Modify contact information in `Contact.js`
- Add or remove portfolio items in `Portfolio.js` (update the `portfolioItems` array)

### Adding New Components

1. Create a new component file in `src/components/`
2. Import and use it in `App.js`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Contact Form

The contact form currently shows a success message when submitted. To connect it to a backend service:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `src/components/Contact.js` to send data to your API

## Deployment to Free Cloud Hosting

### Quick Deploy (Recommended)

**Option 1: Vercel (Easiest - 5 minutes)**
1. Push your code to GitHub (see DEPLOYMENT.md)
2. Go to https://vercel.com and sign up with GitHub
3. Click "New Project" → Import your repository
4. Click "Deploy" - Done! Your site is live in 1-2 minutes

**Option 2: Netlify (Also Easy)**
1. Push your code to GitHub
2. Go to https://www.netlify.com and sign up with GitHub
3. Click "Add new site" → Import your repository
4. Build command: `npm run build`, Publish: `build`
5. Click "Deploy site" - Done!

### Detailed Instructions

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18.2.0 (LTS)
- React DOM 18.2.0
- Create React App
- CSS3 with CSS Variables
- Modern JavaScript (ES6+)

Enjoy your new React website! 🎨

