import type { Config } from "tailwindcss";

const config: Config = {
    content: [
          "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
    theme: {
          extend: {
                  colors: {
                            cloud: {
                                        dancer: "#F2F0EB",
                                        layer: "#D6E4F0",
                            },
                            midnight: "#1B2A4A",
                            azure: "#2F5496",
                            teal: "#0D7C7F",
                            compliance: "#00B050",
                            alert: "#E8553D",
                            sandstone: "#E8E0D4",
                            sage: "#A8C5A0",
                            storm: "#2D2D2D",
                  },
                  fontFamily: {
                            sans: ["Inter", "system-ui", "sans-serif"],
                            display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
                  },
          },
    },
    plugins: [],
};

export default config;
