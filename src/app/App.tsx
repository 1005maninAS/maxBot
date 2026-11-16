import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AskPage from "../pages/AskPage/AskPage";
import MainPage from "../pages/MainPage/MainPage";
import TzPage from "../pages/TzPage/TzPage";

const App = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(window.WebApp.initData);
  }, []);

  return (
    <BrowserRouter>
      <Container sx={{ maxWidth: "1400px" }}>
        <Routes>
          <Route
            path="/main"
            element={<MainPage userId={userId || "неттттт id"} />}
          />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/tz" element={<TzPage />} />
          <Route path="*" element={<MainPage userId={userId || "нет id"} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
