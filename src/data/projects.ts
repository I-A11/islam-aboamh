import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    id: "task-hunter",
    title: "Task Hunter",
    description:
      "A task management app exploring CRUD patterns, local state, and clean list interactions.",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://task-hunter.netlify.app/",
    codeUrl: "https://github.com/I-A11/Task-Hunter",
    featured: true,
  },
  {
    id: "crypto-galaxy",
    title: "Crypto Galaxy",
    description:
      "A cryptocurrency tracker consuming a live market data API, with sorting and search.",
    tech: ["React", "API Integration", "CSS"],
    liveUrl: "https://crypto-galaxy-drab.vercel.app/",
    codeUrl: "https://github.com/I-A11/CryptoGalaxy",
    featured: true,
  },
  {
    id: "movie-studio",
    title: "Movie Studio",
    description:
      "A movie browsing app focused on layout, componentisation, and dynamic data rendering.",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://studio-movies.netlify.app/",
    codeUrl: "https://github.com/I-A11/Movie-Studio",
  },
  {
    id: "movies-club",
    title: "Movies Club",
    description:
      "A companion movie discovery project exploring card-based UI and filtering.",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://moviesclub.netlify.app/",
    codeUrl: "https://github.com/I-A11/MoviesClub",
  },
  {
    id: "home-style",
    title: "Home Style",
    description:
      "An interior/furniture concept storefront built to practice e-commerce-style layouts.",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://home-style.netlify.app/",
    codeUrl: "https://github.com/I-A11/home-style",
  },
  {
    id: "tetris",
    title: "Tetris",
    description:
      "A from-scratch Tetris build — game loop, collision detection, and keyboard state handling.",
    tech: ["JavaScript", "Game Logic", "CSS"],
    liveUrl: "https://quizzical-ptolemy-8ea29d.netlify.app/",
    codeUrl: "https://github.com/I-A11/Tetris-Game",
  },
];
