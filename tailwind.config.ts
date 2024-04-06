import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{space_cadet:"#3D315B",space_cadet_light:"#6A569F",dark_bg:"#201D27"}
      },
  },
  plugins: [],
};
export default config;
