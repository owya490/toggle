import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4338ca",
                secondary: "#E5E7EB",
                success: "#1db954",
            },
            fontFamily: {
                "sf-ui": ["sf-ui"],
                montserrat: ["montserrat"],
                "montserrat-light": ["montserrat-light"],
                "montserrat-bold": ["montserrat-bold"],
            },
        },
    },
    plugins: [],
};
export default config;
