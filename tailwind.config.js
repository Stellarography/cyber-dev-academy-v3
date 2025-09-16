/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aurora-fuchsia': 'var(--color-aurora-fuchsia)',
        'aurora-sky': 'var(--color-aurora-sky)',
        'aurora-emerald': 'var(--color-aurora-emerald)',
      },
    },
  },
  plugins: [],
}
