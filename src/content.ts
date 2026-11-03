/**
 * CONTENUTI MODIFICABILI
 * ----------------------------------------------------------------------------
 * Tutto ciò che è testo, immagine, video o contatto vive in questo file.
 * I contenuti rispecchiano il file Figma (aggiornato il 1 novembre 2026).
 *
 * Immagini: copia i file in /public/media/ con i nomi indicati qui sotto.
 * Finché un file manca, al suo posto compare un segnaposto neutro: il sito
 * funziona comunque e non mostra immagini rotte.
 *
 * Video decorativi: stessa cartella, sempre muti e in loop.
 */

export type Media = {
  /** Percorso dell'immagine (es. "./media/portrait.jpg"). */
  src?: string;
  /** Testo alternativo descrittivo, obbligatorio quando c'è src. */
  alt?: string;
  /** Video decorativo (muto, in loop, inline). */
  video?: string;
  /** Immagine di copertina del video. */
  poster?: string;
  /** Nota mostrata sul segnaposto. */
  note?: string;
};

export const site = {
  name: "Germana Bordonaro",
  descriptor: "Photographer, Filmmaker & Visual Designer",
  altDescriptor: "Visual Storyteller",
};

export const nav = [
  { label: "chi sono", href: "#about" },
  { label: "lavori", href: "#work" },
  { label: "servizi", href: "#services" },
  { label: "contatti", href: "#contact" },
];

export const hero = {
  headline: ["A certain way", "of seeing."],
  intro: "Sono Germana. Osservo, immagino e do forma a identità visive che lasciano il segno.",
  scroll: "Scroll to explore",
  main: { note: "Video loop o fotografia principale · 3:4" } as Media,
  detailLeft: {
    src: "./media/work-02.jpg",
    alt: "Riflessi di luce sull'acqua scura e increspata, in bianco e nero",
    note: "Dettaglio · work-02.jpg",
  } as Media,
  detailRight: {
    src: "./media/hero-detail-right.jpg",
    alt: "Una persona solleva un telo a righe in controluce sopra l'acqua scintillante, in bianco e nero",
    note: "Dettaglio · hero-detail-right.jpg",
  } as Media,
};

export const about = {
  label: "01 / chi sono",
  /** La parte tra le virgolette singole va in corsivo. */
  statement: { before: "Prima ancora di creare, ", em: "osservo", after: "." },
  portrait: {
    src: "./media/portrait.jpg",
    alt: "Ritratto in bianco e nero di una persona che fotografa con una macchina analogica, il volto in parte coperto dai capelli scuri",
    note: "Ritratto · portrait.jpg",
  } as Media,
  paragraphs: [
    "Ho iniziato dalla fotografia e dal video, imparando a raccontare persone, luoghi e storie attraverso la luce, le composizioni e il movimento.",
    "Poi sono arrivati gli studi artistici e la progettazione di esperienze digitali. Percorsi diversi, ma legati dalla stessa curiosità: capire come le immagini comunicano, cosa trasmettono e perché alcune riescono a rimanere impresse.",
  ],
  today: "Oggi porto tutto questo nel mio lavoro.",
  todayBody:
    "Unisco sensibilità estetica, competenze tecniche e pensiero progettuale per aiutare brand e attività a raccontarsi attraverso un'identità visiva autentica, coerente e riconoscibile.",
  /** Citazione centrale: ogni elemento è una riga. */
  closing: ["Una bella immagine attira l'attenzione.", "Un'immagine pensata bene racconta qualcosa."],
  timelineLabel: "01 / Background",
  timeline: [
    {
      when: "2024–Oggi",
      title: "Visual & Digital Projects",
      lines: ["Esperienza professionale in UX, comunicazione visiva e design digitale."],
    },
    { when: "2024", title: "UX & Digital Design", lines: ["Talent Garden, Milano", "UX Design Master"] },
    {
      when: "2021–2023",
      title: "Art & Museum Education",
      lines: ["Accademia Albertina di Belle Arti di Torino", "Didattica Museale"],
    },
    {
      when: "2014–2018",
      title: "Visual Arts",
      lines: ["Accademia di Belle Arti di Catania", "Nuove Tecnologie dell'Arte"],
    },
  ],
};

export type Project = {
  id: string;
  number: string;
  /** Testo della didascalia accanto al numero. */
  category: string;
  disciplines: string;
  /** Opzionali: nel design Figma attuale non compaiono. */
  title?: string;
  year?: string;
  description?: string;
  media: Media;
  /** Proporzione larghezza/altezza, es. "4/5". */
  ratio: string;
  /** Link al dettaglio. Se vuoto, il progetto non è cliccabile. */
  href?: string;
};

export const work = {
  label: "02 / lavori",
  heading: ["Selected work,", "different perspectives."],
  intro:
    "Una selezione di immagini, storie e progetti nati dall'incontro tra sensibilità visiva e pensiero progettuale.",
  rangeLabel: "Selected work — 2020/2026",
  projects: [
    {
      id: "food-hospitality",
      number: "01",
      category: "hospitality",
      disciplines: "Photography / Film / Visual Storytelling",
      media: {
        src: "./media/work-01.jpg",
        alt: "Sedia a sdraio bianca a bordo piscina con dei limoni appoggiati sopra, nella luce dorata di fine giornata",
        note: "Progetto 01 · work-01.jpg",
      },
      ratio: "824/887",
    },
    {
      id: "product-still-life",
      number: "02",
      category: "still Life",
      disciplines: "Photography / Art Direction",
      media: {
        src: "./media/work-02.jpg",
        alt: "Riflessi di luce sull'acqua scura e increspata, in bianco e nero",
        note: "Progetto 02 · work-02.jpg",
      },
      ratio: "467/583",
    },
    {
      id: "people-stories",
      number: "03",
      category: "product & Stories",
      disciplines: "Photography / Film",
      media: {
        src: "./media/work-03.jpg",
        alt: "Un calice con una bevanda arancione sollevato davanti al sole al tramonto",
        note: "Progetto 03 · work-03.jpg",
      },
      ratio: "467/622",
    },
    {
      id: "brand-digital",
      number: "04",
      category: "storytelling",
      disciplines: "Visual Design / Creative Direction",
      media: { video: "./media/work-04.mp4", note: "Video loop · work-04.mp4" },
      ratio: "1420/609",
    },
  ] as Project[],
};

export type VisualStudy = { code: string; title: string; media: Media; ratio: string };

export const archive: VisualStudy[] = [
  {
    code: "001",
    title: "Light & Shadow",
    media: {
      src: "./media/study-001.jpg",
      alt: "Tagliere con antipasti e verdure in una luce calda",
      note: "Studio · study-001.jpg",
    },
    ratio: "336/419",
  },
  {
    code: "002",
    title: "Ordinary Things",
    media: {
      src: "./media/study-002.jpg",
      alt: "Una luna arancione che scende nel buio e lascia dietro di sé una lunga scia di luce",
      note: "Studio · study-002.jpg",
    },
    ratio: "375/493",
  },
  {
    code: "003",
    title: "Movement",
    media: {
      src: "./media/study-003.jpg",
      alt: "Pennellate astratte color seppia in un vortice, con piccole case e alberi disegnati al centro",
      note: "Studio · study-003.jpg",
    },
    ratio: "586/391",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  /** Parte finale della descrizione, in corsivo. */
  descriptionEm?: string;
  areas: string[];
  note?: string;
};

export const services = {
  label: "03 / cosa faccio",
  heading: ["Good visuals.", "Better stories."],
  intro: "Ogni attività ha qualcosa da raccontare. Il mio lavoro è trovare il modo giusto per mostrarlo.",
  items: [
    {
      number: "01",
      title: "Photography",
      description: "Fotografie che valorizzano identità e dettagli. Dal prodotto al food, dagli spazi alle persone, ",
      descriptionEm: "ogni immagine nasce per raccontare qualcosa.",
      areas: ["Food photography", "Product photography", "Lifestyle", "Interiors", "Portraits", "Brand content"],
    },
    {
      number: "02",
      title: "Film & Motion",
      description:
        "Immagini in movimento che danno ritmo e profondità alle storie. Video e contenuti pensati per comunicare in modo naturale, coinvolgente e riconoscibile.",
      areas: ["Brand videos", "Short-form video", "Social content", "Visual storytelling", "Promotional videos"],
    },
    {
      number: "03",
      title: "Visual Direction",
      description:
        "Prima delle immagini c'è un'idea. Affianco brand e attività nella definizione di un linguaggio visivo coerente, capace di esprimere la loro personalità.",
      areas: ["Visual concepts", "Art direction", "Brand image consulting", "Creative direction", "Visual consistency"],
      note: "Il filo che attraversa anche ogni singolo progetto di fotografia o video.",
    },
  ] as Service[],
};

export const approach = {
  label: "04 / il mio approccio",
  steps: [
    {
      number: "01",
      word: "osservo",
      text: "Prima di creare, cerco di capire. Le persone, le storie, i dettagli e ciò che rende unico un progetto.",
    },
    {
      number: "02",
      word: "immagino",
      text: "Trasformo intuizioni e necessità in una direzione visiva, cercando un equilibrio tra estetica e comunicazione.",
    },
    {
      number: "03",
      word: "creo",
      text: "Dalle idee alle immagini. Fotografie, video e contenuti pensati per funzionare insieme.",
    },
  ],
};

export type ContactItem = { label: string; value: string; href?: string };

export const contact = {
  label: "05 / contatti",
  heading: ["Hai qualcosa", "in mente?"],
  copy: "Un'idea da sviluppare, un'attività da raccontare o semplicemente la sensazione che la tua immagine non ti rappresenti più?",
  cta: "Rendiamolo reale",
  /** Il pulsante principale scrive a questo indirizzo. */
  email: "germanab@live.com",
  /**
   * Senza `href` il valore appare come testo semplice.
   * Instagram e LinkedIn: aggiungi l'indirizzo del profilo quando è pronto.
   */
  items: [
    { label: "Email", value: "germanab@live.com", href: "mailto:germanab@live.com" },
    { label: "Instagram", value: "@_______germana" },
    { label: "LinkedIn", value: "Germana Bordonaro" },
    { label: "WhatsApp", value: "3317093451", href: "https://wa.me/393317093451" },
  ] as ContactItem[],
};

export const footer = {
  topLabel: "Torna su",
};
