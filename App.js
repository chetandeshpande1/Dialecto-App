import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { ThemeProvider, ThemeContext } from "./themeContext";
import { LanguageProvider } from "./languageContext";
import { useContext } from "react";

// get theme and language contexts here
const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
};

export default function App() {
  return (    
    < ThemeProvider >
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
    </ThemeProvider >
  );
}