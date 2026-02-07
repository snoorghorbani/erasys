/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: ["bg-background", "text-foreground"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            borderRadius: {
                xl: "1rem",
            },
        },
    },
    plugins: [],
};
