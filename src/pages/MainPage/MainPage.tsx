import { Button, Stack, Typography } from "@mui/material";

interface DefaultTabs {
  id: number;
  label: string;
  description: string;
  url: string;
}

const MAIN_TABS: DefaultTabs[] = [
  {
    id: 1,
    label: "Рассеять туман",
    description: "Задать вопрос аналитику ",
    url: "/ask",
  },
  {
    id: 2,
    label: "Генератор  замыслов",
    url: "/tz",
    description: "Получить невыполнимое задание",
  },
];

export default function MainPage() {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography variant="h4">Требования в тумане</Typography>
      <Typography variant="h6">Симулятор корпоративного абсурда</Typography>

      <Typography variant="subtitle1">
        Броди по туману требований, задавай вопросы в пустоту и собирай бинго
        болей.
      </Typography>
      {MAIN_TABS.map((tab) => (
        <Button key={tab.id}>
          <Stack>
            <Typography variant="h6">{tab.label}</Typography>
            <Typography variant="body1">{tab.description}</Typography>
          </Stack>
        </Button> 
      ))}
    </Stack>
  );
}
