import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          "1": "#ffffff",
          "2": "#6da8d5",
          "3": "#A0D3F3",
        },
        card: {
          "1": "#5D8DED",
          "2": "#DCA54C",
          "3": "#9FEA61",
        },
        dark: {
          "1": "#1C1F2E",
        },
      },
      backgroundImage: {
        heroImg: "url('/images/skycover.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
