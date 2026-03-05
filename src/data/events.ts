export interface Event {
  title: string;
  images: string[];
  gradient: string;
}

export const events: Event[] = [
  {
    title: "Palácio Guanabara",
    images: [
      "/palacio-1.webp",
      "/palacio-2.webp",
      "/palacio-3.webp",
      "/palacio-4.webp",
      "/palacio-5.webp",
      "/palacio-6.webp",
      "/palacio-7.webp",
      "/palacio-8.webp",
    ],
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    title: "Festa em Itaipava",
    images: [
      "/festa-itai-1.webp",
      "/festa-itai-2.webp",
      "/festa-itai-3.webp",
      "/festa-itai-4.webp",
    ],
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    title: "Construtora",
    images: [
      "/contrutora-1.webp",
      "/contrutora-2.webp",
      "/contrutora-3.webp",
      "/contrutora-4.webp",
    ],
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    title: "Fórum",
    images: [
      "/forum-1.webp",
      "/forum-2.webp",
    ],
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    title: "Evento Love",
    images: [
      "/love-1.webp",
      "/love-2.webp",
    ],
    gradient: "from-pink-500 to-rose-400",
  },
  {
    title: "Sorriso",
    images: [
      "/sorriso-1.webp",
      "/sorriso-2.webp",
    ],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "Terraço",
    images: [
      "/terraco-1.webp",
      "/terraco-2.webp",
    ],
    gradient: "from-blue-500 to-cyan-400",
  },
];
