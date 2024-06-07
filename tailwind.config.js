/** @type {import('tailwindcss').Config}*/
 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background" : "url('https://i.ibb.co/wcgZWM3/we-Are-Friends.jpg')"
      },
      fontFamily : {
        cinzel : '"Cinzel", serif'
      }
    },
  },
   
  plugins : []
};
