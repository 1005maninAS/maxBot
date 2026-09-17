import { Box, Paper, Typography } from "@mui/material";

interface ChatMessageProps {
  author: "user" | "analyst";
  text: string;
}

export default function ChatMessage({ author, text }: ChatMessageProps) {
  const isUser = author === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          maxWidth: "80%",
          px: 1.5,
          py: 1,
          borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
          bgcolor: isUser ? "primary.main" : "background.paper",
          color: isUser ? "#fff" : "text.primary",
          border: isUser ? "none" : "1px solid rgba(124, 77, 255, 0.2)",
          boxShadow: isUser ? "0 0 16px rgba(124, 77, 255, 0.25)" : "none",
        }}
      >
        {!isUser && (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.secondary",
              fontStyle: "italic",
              mb: 0.5,
            }}
          >
            Требовашкин А.А.
          </Typography>
        )}
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {text}
        </Typography>
      </Paper>
    </Box>
  );
}
