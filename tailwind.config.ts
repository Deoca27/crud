import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'color1' : '#133E87',
    //   'color2' : '#F3F3E0',
    // },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color1' : '#133E87',
        'color2' : '#F3F3E0',
        'color3' : {
          '1' : '#ff7849',
          '2' : 'white',
          '3' : '#7e5bef'
        }
      },
      spacing: {
        '5X' : '5px',
        '15X' : '15px',
        '25X' : '25px',
        '10%' : '10%',
        '30%' : '30%'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
};
export default config;
