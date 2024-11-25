# Fundación Yarumal Verdolaga Website

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-brightgreen.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.15-38B2AC.svg)](https://tailwindcss.com/)

## 🌟 Overview

This is the frontend application for Fundación Yarumal Verdolaga, designed to increase the foundation's web presence and engage with potential contributors. Our platform aims to create a seamless experience for visitors while showcasing the foundation's impact and initiatives.

## ✨ Key Features

- 🌓 Dark/Light mode toggle for enhanced user experience
- 🧩 Reusable component architecture
- 📱 Fully responsive design
- 📬 Integrated contact form using EmailJS
- 🗺️ Dynamic routing system

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Router](https://reactrouter.com/) - For seamless navigation
- [EmailJS](https://www.emailjs.com/) - Email service integration
- [dotenv](https://github.com/motdotla/dotenv) - Environment variable management

## 📂 Project Structure

```
src/
├── assets/          # Static files and resources
├── components/      # Reusable UI components
│   ├── EmailForm.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Link.jsx
│   └── MainBody.jsx
├── context/        # React Context files
│   └── ThemeContext.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── Nosotros.jsx
│   └── Proyectos.jsx
├── App.jsx         # Main App component
├── index.css       # Global styles
└── main.jsx       # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/fundacion-yarumal-verdolaga.git
```

2. Navigate to the project directory
```bash
cd fundacion-yarumal-verdolaga
```

3. Install dependencies
```bash
npm install
```

4. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_SERVICE_ID=your_service_id
```

5. Start the development server
```bash
npm run dev
```

## 🔨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Dependencies

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "dotenv": "^16.4.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.0.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.10"
  }
}
```

## 🤝 Contributing

We welcome contributions to improve the foundation's website! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR description clearly describes the changes and their impact.

## 📫 Contact

- Website: [https://www.fundacionyarumalverdolaga.org](https://www.fundacionyarumalverdolaga.org)
- Contact Form: Available on our website

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.