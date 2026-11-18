import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AskPage from "../pages/AskPage/AskPage";
import MainPage from "../pages/MainPage/MainPage";
import TzPage from "../pages/TzPage/TzPage";

const App = () => {
  return (
    <BrowserRouter>
      <Container sx={{ maxWidth: "1400px" }}>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/tz" element={<TzPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
