import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgba-white-10': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        'first-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }
    },
  },
  plugins: [],
};
export default config;
