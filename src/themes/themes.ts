export const themes = {
  theme1: {
    name: "Minimalist",
    background: "#f8f9fa",
    text: "#212529",
    cardBackground: "#ffffff",
    inputBackground: "#ffffff",
    font: "'Helvetica Neue', sans-serif",
    layout: "flex flex-col p-6 space-y-4",
  },
  theme2: {
    name: "Dark Mode",
    background: "#121212",
    text: "#ffffff",
    cardBackground: "#1e1e1e",
    inputBackground: "#2c2c2c", // Dark grey for inputs in dark mode
    font: "'Merriweather', serif",
    layout: "flex flex-row p-6 gap-6",
  },
  theme3: {
    name: "Colorful",
    background: "#fff0f5",
    text: "#333333",
    cardBackground: "#ffffff",
    inputBackground: "#ffffff",
    font: "'Pacifico', cursive",
    layout: "grid grid-cols-1 md:grid-cols-2 gap-4 p-6",
  },
};

export type ThemeType = typeof themes.theme1;