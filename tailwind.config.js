/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F3ED",
        ink: "#242321",
        accent: "#8D101D",
        paper: "#EDE8DD",
        stone: "#DDD6C8",
        night: "#34322F",
        mute: "#77726A",
      },
      // Un'unica famiglia: grotesco leggero. Il contrasto nasce da peso e scala.
      fontFamily: {
        sans: ['"Hanken Grotesk"', "Inter", "system-ui", "sans-serif"],
        // Solo per il titolo dei contatti (Cabinet Grotesk, Fontshare).
        display: ['"Cabinet Grotesk"', '"Hanken Grotesk"', "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        label: ["clamp(0.6875rem, 0.66rem + 0.1vw, 0.75rem)", { lineHeight: "1.5", letterSpacing: "0.16em" }],
        small: ["clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)", { lineHeight: "1.6" }],
        body: ["clamp(1rem, 0.96rem + 0.15vw, 1.0625rem)", { lineHeight: "1.7" }],
        lead: ["clamp(1.125rem, 1.02rem + 0.5vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.5rem, 1.2rem + 1.4vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        h2: ["clamp(2.25rem, 1.2rem + 4.6vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        h1: ["clamp(3.25rem, 0.8rem + 11.5vw, 13rem)", { lineHeight: "0.9", letterSpacing: "-0.05em" }],
      },
      maxWidth: { page: "1600px" },
      transitionTimingFunction: { editorial: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
