module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: "#8257E5",
        brandHover: "#996DFF",
        surfacePrimary: "#18181B",
        surfaceSecondary: "#27272A",
        surfaceSecondaryHover: "#3F3F46",
        stroke: "#52525B",
        tolltip: "#F4F4F5",
        textPrimary: "#F4F4F5",
        textSecondary: "#A1A1AA",
        textOnTolltip: "#27272A",
        textOnBrandColor: "white"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
