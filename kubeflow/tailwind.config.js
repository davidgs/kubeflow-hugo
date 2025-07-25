/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./static/**/*.js",
    "./themes/**/layouts/**/*.html",
    "./data/**/*.{yaml,yml,json}",
    "./config.{toml,yaml,yml,json}",
    "./themes/kubeflow/layouts/**/*.html",
    "./themes/kubeflow/layouts/partials/**/*.html",
    "./themes/kubeflow/layouts/shortcodes/**/*.html",
    "./themes/kubeflow/exampleSite/**/*.{html,md,toml,yaml,yml}",
    "../../content/**/*.{html,md}",
    "../../config.toml",
    "../../layouts/**/*.html",
  ],
  safelist: [
    // Dynamic color classes used in templates
    "bg-orange-600",
    "bg-purple-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-red-600",
    "bg-yellow-600",
    "hover:bg-orange-700",
    "hover:bg-purple-700",
    "hover:bg-blue-700",
    "hover:bg-green-700",
    "hover:bg-red-700",
    "hover:bg-yellow-700",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ml-blue": "#1e90ff",
        "ai-purple": "#8b5cf6",
        "ml-cyan": "#06b6d4",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
