# Frontend ramverk

Inspirerad ifrån [stateofjs](https://stateofjs.com) där jag som student valde ett av de listade ramverken och skapade en enklare variant av sidan med det valda ramverket.
Jag valde Svelte.

![Example](https://user-images.githubusercontent.com/17639389/210244688-34d58e7d-1c6c-4c43-a3ec-e01f89dd7abd.jpg)

## Installation & Utveckling

1. Kör `npm install` för att komma igång.
2. Kör `npm run dev` för att öppna sidan.
4. Kör `npm test` för att köra tester.

### Lista av data-cy som ska finnas i koden

- `data-cy="chart-header"` övre delen av diagrammet som visar åren (2016-2022).
- `data-cy="chart-row"` varje rad i diagrammet som representerar ett ramverk.
- `data-cy="chart-cell"` varje cell i varje rad, gäller även tomma celler.
- `data-cy="chart-circle"` värdet som visas i en cell - en färgad cirkel med en procentsats.
- `data-cy="row-line"` den färgade linjen som går igenom varje rad.

**Inlämningen skall bestå av en zippad mapp och två PDF'er.**

### Krav för Godkänt

- [x] Uppgiften har lämnats in i tid (Kod, Rapport, Presentation).
- [x] Rapporten följer uppgiftsbeskrivningen ovan.
- [x] Readmefilen har uppdaterats enligt beskrivning ovan.
- [-] Projektet här hostat på Netlify och går att nå via en demolänk i readme filen.
- [x] Git och GitHub har använts.
- [x] Sidan innehåller en header, footer och main.
- [x] Sidan är responsiv.
- [x] Sidan visar "retention" informationen som finns i [data filen](./data/index.js) i enlighet med bilden ovan.

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [x] Sidan använder klient-routing för att gå till /retention när användaren besöker startsidan.
- [x] Sidan använder klient-routing för att gå till /retention när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /interest när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /usage när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /awareness när användaren klickar på länken i footern.

_Gjorda krav ska kryssas för._
