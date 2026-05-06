export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                glow: "glow 4s ease-in-out infinite",
            },
            keyframes: {
                glow: {
                    "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
                    "50%": { opacity: "0.8", transform: "scale(1.15)" },
                },
            },
        },
    },
    plugins: [],
}