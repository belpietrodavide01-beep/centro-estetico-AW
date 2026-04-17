Obiettivo: Configurare un ambiente React professionale ottimizzato per l'integrazione manuale dei componenti della libreria React Bits.

Task per gli Agenti:

Setup Core: * Inizializza un progetto Vite + React.

Installa Tailwind CSS, PostCSS e Autoprefixer.

Preparazione Stack React Bits:

Installa le dipendenze fondamentali richieste dai componenti di React Bits: framer-motion, lucide-react, clsx, tailwind-merge.

Crea il file helper src/lib/utils.js (o .ts) con la funzione cn per la gestione dinamica delle classi CSS:
javascript


import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) { return twMerge(clsx(inputs)); }

Configurazione Tailwind Avanzata:

Configura tailwind.config.js in modo che sia pronto a ricevere animazioni custom. Inserisci nel tema esteso (extend) gli oggetti vuoti per keyframes e animation, pronti per essere popolati in base ai componenti React Bits che sceglierò.

Struttura Componenti:

Crea la cartella src/components/react-bits dove andrò a inserire i file sorgente dei componenti che copierò dalla libreria.

Clean Slate:

Rimuovi tutti gli stili e i contenuti predefiniti di Vite per avere un'interfaccia totalmente bianca (Tabula Rasa).

Output richiesto: Il progetto deve essere avviabile, con le dipendenze installate e i file di configurazione pronti per l'integrazione di animazioni e stili personalizzati.