import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="m-2"><ThemeBtn /></div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
