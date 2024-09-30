import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar/AppAppBar";
import MainContent from "./components/MainContent/MainContent";
import getBlogTheme from "./theme/getBlogTheme";

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const blogTheme = createTheme(getBlogTheme(mode));

  React.useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); 
  };

  return (
    <ThemeProvider theme={blogTheme}>
      <CssBaseline enableColorScheme />

      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />
      </Container>
    </ThemeProvider>
  );
}
