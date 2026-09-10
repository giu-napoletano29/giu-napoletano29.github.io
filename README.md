# giuseppenapoletano.dev

Sito vetrina dell'attività freelance di **Giuseppe Napoletano** — Software Engineer & Soluzioni Cloud.
Ospitato su GitHub Pages, dominio [giuseppenapoletano.dev](https://giuseppenapoletano.dev).

## Com'è fatto

Sito statico scritto a mano: nessun build step, nessuna dipendenza, nessun tracciamento.
Basta fare push su `main` e GitHub Pages pubblica.

```
index.html            pagina unica: hero, soluzioni, progetti, chi sono,
                      competenze tecniche, esperienza, contatti
404.html              pagina di errore
assets/css/style.css  design system (palette e font ripresi dal biglietto da visita)
assets/js/main.js     lingua IT/EN, menu, animazioni, pulizia del vecchio service worker
images/               foto, logo e screenshot dei progetti
service-worker.js     kill switch del service worker VuePress precedente
sitemap.xml           sitemap
CNAME                 dominio personalizzato
```

## Bilingue

L'italiano è scritto direttamente nell'HTML (indicizzabile e leggibile anche senza JavaScript).
L'inglese sta nel dizionario `EN` in `assets/js/main.js`: ogni elemento traducibile porta un
attributo `data-i18n="chiave"` e la chiave corrispondente nel dizionario.

Per aggiungere un testo tradotto:

1. nell'HTML: `<p data-i18n="sezione.chiave">Testo italiano</p>`
2. in `main.js`: `'sezione.chiave': 'English text',`

La lingua si sceglie con i pulsanti IT/EN, si può forzare con `?lang=en` e viene ricordata
nel `localStorage`.

## Aggiungere un progetto al portfolio

1. Metti lo screenshot principale in `images/projects/` (JPEG 1280x637) e le immagini
   di dettaglio a 1000x500. Tutte le immagini della galleria hanno rapporto 2:1: se ne usi
   una con proporzioni diverse verra' ritagliata.
2. Duplica in `index.html` il blocco `<article class="project">` (scheda del progetto)
   e, se servono, le voci `<li>` dentro `<ul class="gallery">`.
3. Aggiungi le chiavi `data-i18n` nuove al dizionario `EN` in `assets/js/main.js`.

Le descrizioni dei progetti sono scritte in terza persona ("Piattaforma di gestione per..."),
non in prima: la parte in prima persona sta nelle sezioni Servizi, Come lavoro e Chi sono.

## Anteprima in locale

```bash
python -m http.server 8080
```

Poi apri <http://localhost:8080>.
(`.claude/launch.json` fa la stessa cosa sulla porta 8123 dentro Claude Code.)

## Da aggiornare quando serve

- Numero di telefono e email: compaiono in `index.html` (JSON-LD, contatti, barra mobile).
- Immagine di anteprima per i social: `images/og-cover.jpg`.
- `sitemap.xml`: aggiorna `lastmod` a ogni revisione importante dei contenuti.
- Il sito non parla mai di prezzi, preventivi o tariffe: è una scelta, tienila presente
  se aggiungi testi nuovi.
- Il registro dei testi è professionale e descrittivo ("mi occupo di", "il lavoro riguarda"),
  non promozionale ("faccio questo per te"). Le descrizioni dei progetti restano impersonali.
- Le sezioni parlano a due pubblici distinti e vanno tenute separate:
  **Soluzioni** (`#soluzioni`) è rivolta ai clienti e descrive i tipi di progetto;
  **Competenze tecniche** (`#competenze`) è rivolta ai recruiter ed elenca linguaggi,
  ambienti e pratiche. Non mescolare i due registri.
- L'elenco in `.techspec` e le schede in `#esperienza` sono allineati al curriculum
  (`Giuseppe Napoletano 2026 - DevOps.pdf`): quando aggiorni il CV, aggiorna anche questi.
- Il sito non ha una sezione FAQ: le domande si convogliano sui contatti.
