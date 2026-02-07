/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("../../packages/tailwind-config/tailwind.config.js")],
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "../../packages/ui/src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
