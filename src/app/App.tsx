import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AskPage from "../pages/AskPage/AskPage";
import MainPage from "../pages/MainPage/MainPage";
import TzPage from "../pages/TzPage/TzPage";

const App = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Проверяем, что window.WebApp существует, прежде чем читать initData
    if (window.WebApp) {
      const initData = window.WebApp.initData;
      setUserId(initData);
    } else {
      // Если WebApp нет, можно записать в состояние заглушку или лог
      console.log("window.WebApp не найден. Откройте приложение внутри MAX.");
      setUserId("(WebApp не найден — открыто не в MAX)");
    }
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
