/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C", // Dark gray for main text
        secondary: "#4A5568", // Medium gray for secondary text
        accent: "#3182CE", // Soft blue
        background: "#F7FAFC", // Off-white for background
        surface: "#FFFFFF", // White for cards
        success: "#38A169", // Muted green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
