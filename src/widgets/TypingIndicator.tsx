import { Box, Paper, keyframes } from "@mui/material";

const pulse = keyframes`
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-3px); }
`;

export default function TypingIndicator() {
  return (
    <Paper
      sx={{
        alignSelf: "flex-start",
        maxWidth: "80%",
        px: 1.5,
        py: 1,
        borderRadius: "16px 16px 16px 4px",
        bgcolor: "background.paper",
        border: "1px solid rgba(124, 77, 255, 0.2)",
        display: "flex",
        gap: 0.5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: "text.secondary",
            animation: `${pulse} 1.2s infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </Paper>
  );
}
