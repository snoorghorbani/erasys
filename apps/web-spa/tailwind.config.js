module.exports = {
    presets: [require("@repo/tailwind-config")],
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
        "./containers/**/*.{ts,tsx}",
        "../../packages/ui/src/**/*.{ts,tsx}",
    ]
};
