/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors:{
                background:"#111",
                foreground:"#fff"
            }
        },
    },
    plugins: [],
};
