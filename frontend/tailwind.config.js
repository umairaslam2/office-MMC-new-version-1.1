/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Yeh important! Vite ke HTML files scan karega
    "./src/**/*.{js,ts,jsx,tsx}",  // Apne components ke paths daalo (e.g., .vue if Vue use kar rahe)
  ],
  theme: {
    extend: {  // Ya directly 'screens' override karo
      screens: {
        'lg': '475px',  // Custom small screen
        'md': '768px',  // Default ko override
        'hb': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Apne custom add karo, jaise 'tablet': '600px'
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         light: "#00C5CB",
//       },
//       screens: {
//         xxs: "450px", // simpler syntax v4 me better hai
//         hb: "2000px", // simpler syntax v4 me better hai
//       },
//     },
//   },
//   plugins: [],
// };
