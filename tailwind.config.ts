import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        'sand-light': 'var(--color-sand-light)',
        'sand-medium': 'var(--color-sand-medium)',
        'sand-dark': 'var(--color-sand-dark)',
      },
      fontFamily: {
        'notosans': ['var(--font-noto-sans)'],
      },
       fontWeight: {
        light: '300',      
        normal: '400',     
        medium: '500',     
        semibold: '600',   
        bold: '700',       
        extrabold: '800',  
      },
    },
  },
  plugins: [],
};

export default config;