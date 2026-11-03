# Germana Bordonaro — A certain way of seeing

Portfolio editoriale in React + TypeScript + Tailwind CSS (Vite, Framer Motion).

## Avvio

```bash
npm install
npm run dev      # sviluppo
npm run build    # build di produzione in /dist
```

## Dove modificare le cose

Tutto il contenuto è in **`src/content.ts`**: testi, progetti, immagini, video, contatti. Rispecchia il file Figma.

### Foto e video

Copia i file in `public/media/` con questi nomi. Se un file manca, al suo posto compare un segnaposto e il sito funziona comunque.

| File | Dove compare |
|------|--------------|
| `hero-detail-right.jpg` | Hero, immagine piccola a destra |
| `portrait.jpg` | Chi sono, ritratto |
| `work-01.jpg` | Lavori 01 |
| `work-02.jpg` | Lavori 02 e hero (immagine piccola a sinistra) |
| `work-03.jpg` | Lavori 03 |
| `work-04.mp4` | Lavori 04, video a tutta larghezza (muto, in loop) |
| `study-001.jpg`, `study-002.jpg`, `study-003.jpg` | Studi visivi |

Mancano ancora `study-001.jpg` e l'immagine centrale dell'hero (per questa imposta `src` in `content.ts`), più il video `work-04.mp4`.

### Contatti

`contact.items` in `content.ts`. Una voce senza `href` appare come testo semplice; aggiungi l'indirizzo del profilo Instagram e LinkedIn quando è pronto.

### Font

Hanken Grotesk da Google Fonts; il titolo dei contatti usa Cabinet Grotesk da Fontshare (link in `index.html`).

## Struttura

```
src/
  content.ts          contenuti modificabili
  components/         Navigation, EditorialLabel, SectionHeading, MediaFrame,
                      ProjectItem, VisualStudy, ServiceRow, ContactLink, Footer, Reveal
  sections/           Hero, About, Work, Services, Approach, Contact
tailwind.config.js    palette (ivory / ink / accent) e scala tipografica fluida
```

Le animazioni rispettano `prefers-reduced-motion`.
