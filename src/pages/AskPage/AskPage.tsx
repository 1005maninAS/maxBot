import { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dialogTree, type Message } from "./constants";
import ChatMessage from "../../widgets/ChatMessage";
import TypingIndicator from "../../widgets/TypingIndicator";

const getRandomDelay = () => 800 + Math.random() * 800;

export default function AskPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, author: "analyst", text: dialogTree.start.analystMessage },
  ]);
  const [currentNode, setCurrentNode] = useState<string>("start");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const node = dialogTree[currentNode];
  const options = node?.nextOptions ?? [];

  const handleChoose = (index: number) => {
    if (typing) return;
    const option = node.nextOptions[index];
    if (!option) return;

    const userText = option.userMessage ?? option.label;
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, author: "user", text: userText },
    ]);

    if (option.next === null) {
      return;
    }

    setTyping(true);
    const delay = getRandomDelay();
    setTimeout(() => {
      const nextNode = dialogTree[option.next as string];
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          author: "analyst",
          text: nextNode.analystMessage,
        },
      ]);
      setCurrentNode(option.next as string);
      setTyping(false);
    }, delay);
  };

  const restart = () => {
    setMessages([
      { id: 1, author: "analyst", text: dialogTree.start.analystMessage },
    ]);
    setCurrentNode("start");
    setTyping(false);
    nextId.current = 2;
  };

  const showRestart =
    !typing &&
    currentNode !== "start" &&
    node.nextOptions.every((o) => o.next === null);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        pt: "env(safe-area-inset-top, 44px)",
        pb: "env(safe-area-inset-bottom, 20px)",
        px: 2,
        bgcolor: "background.default",
      }}
    >
      {/* Верхняя часть */}
      <Box sx={{ flexShrink: 0 }}>
        <Button onClick={() => navigate("/")} sx={{ mb: 1 }}>
          ← Назад
        </Button>
        <Stack spacing={0.5} sx={{ mb: 2 }}>
          <Typography variant="h5">Рассеять туман</Typography>
          <Typography variant="body2" color="text.secondary">
            Задай вопрос аналитику
          </Typography>
        </Stack>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          py: 1,
        }}
      >
        {messages.map((m) => (
          <ChatMessage key={m.id} author={m.author} text={m.text} />
        ))}
        {typing && <TypingIndicator />}
      </Box>

      {/* Нижняя панель с кнопками */}
      <Box sx={{ flexShrink: 0, pt: 1.5 }}>
        {showRestart ? (
          <Stack spacing={1.5}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: "center", fontStyle: "italic" }}
            >
              Ты вышел из тумана. Или заблудился глубже.
            </Typography>
            <Button variant="contained" fullWidth onClick={restart}>
              Начать заново
            </Button>
          </Stack>
        ) : (
          <Stack
            sx={{ justifyContent: "flex-end", flexDirection: "row", gap: 1 }}
          >
            {options.map((opt, i) => (
              <Button
                key={i}
                variant="outlined"
                size="small"
                disabled={typing}
                onClick={() => handleChoose(i)}
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  borderColor: "rgba(124, 77, 255, 0.4)",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(124, 77, 255, 0.08)",
                  },
                }}
              >
                {opt.label}
              </Button>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
