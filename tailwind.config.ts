import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dineroBlue: "#0C6599",
      },
      backgroundImage: {
        joinImage: "url('/Photo.png')",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1199px",
        xl: "1199px",
        "2xl": "1199px"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
