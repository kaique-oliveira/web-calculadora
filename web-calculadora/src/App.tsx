import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { Home } from "./pages/Home";
import "./global.css";
import { Container } from "./container";
import { useChangeTheme } from "./hooks/ChangeTheme";

function App() {
  const { getTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={getTheme === "light" ? light : dark}>
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
