import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AskPage from "../pages/AskPage/AskPage";
import MainPage from "../pages/MainPage/MainPage";
import TzPage from "../pages/TzPage/TzPage";
import type { MaxBridgeWebApp } from "max-bridge";

const App = () => {
  const [userId, setUserId] = useState<MaxBridgeWebApp | null>(null);

  useEffect(() => {
    if (window.WebApp) {
      const initData = window.WebApp;

      if (initData) {
        const urlParams = new URLSearchParams(initData);
        const userJson = urlParams.get("user");

        if (userJson) {
          const user = JSON.parse(userJson);
          setUserId(initData);
          console.log("User ID:", user.id);
        }
      }
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
