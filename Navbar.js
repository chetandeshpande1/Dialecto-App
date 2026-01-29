import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="navbar">
      <span>Dialecto</span>

      <div className="right">
        <button onClick={toggleTheme}>
          {theme === "light" ? "dark theme" : "light theme"}
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
