/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("@repo/tailwind-config/tailwind.config.js")],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
