// script.js

const timelinePoints = document.querySelectorAll('.timeline-point');
const imagePairs = document.querySelectorAll('.image-pair');
const descriptionBox = document.getElementById('description');
const dateLabel = document.getElementById('date-label');

const descriptions = {
  "22/04/1986": "Immagine satellitare prima dell'incidente: nulla sembra fuori posto...",
  "26/04/1986": "Data dell'incidente: l'esplosione ha causato un'enorme dispersione di materiale radioattivo.",
  "08/05/1986": "Le prime conseguenze ambientali iniziano ad essere visibili.",
  "25/01/2001": "Una delle prime revisioni strutturali dell'area contaminata.",
  "04/11/2014": "Attività di monitoraggio e contenimento ancora in corso.",
  "18/02/2016": "Fase finale del nuovo sarcofago di contenimento.",
  "28/04/2016": "Il nuovo contenitore è stato posizionato con successo.",
  "08/09/2016": "Controlli sulle strutture limitrofe alla centrale.",
  "18/09/2016": "Le foreste circostanti mostrano segni evidenti di stress ambientale.",
  "28/10/2016": "Ulteriori verifiche geologiche dell'area.",
  "04/11/2016": "Ultimi interventi strutturali effettuati sul sarcofago.",
  "14/11/2016": "Studi sull'impatto a lungo termine sugli ecosistemi.",
  "04/12/2016": "Monitoraggio continuo dell'area contaminata.",
  "07/12/2016": "Interventi sulla vegetazione contaminata.",
  "25/02/2017": "Studi sul ritorno della fauna selvatica.",
  "31/07/2020": "Droni in azione per mappare l'evoluzione del sito.",
  "14/04/2025": "Analisi di lungo periodo e prospettive future."
};

function updateSlider(date) {
  imagePairs.forEach(pair => {
    pair.style.display = pair.dataset.date === date ? 'flex' : 'none';
  });
  descriptionBox.textContent = descriptions[date] || 'Descrizione non disponibile.';
  dateLabel.textContent = date;
}

timelinePoints.forEach(point => {
  point.addEventListener('click', () => {
    updateSlider(point.dataset.date);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  updateSlider("22/04/1986");
  updateSlider("26/04/1986");
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("dateSlider");
  const descriptions = document.querySelectorAll(".description-box");

  slider.addEventListener("input", () => {
    const value = slider.value;

    // Mostra solo la descrizione corrispondente
    descriptions.forEach((desc) => {
      if (desc.getAttribute("data-slider-value") === value) {
        desc.classList.add("active");
      } else {
        desc.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const timelinePoints = document.querySelectorAll(".timeline-point");
  const imagePairs = document.querySelectorAll(".image-pair");
  const descriptions = document.querySelectorAll(".description-box");

  timelinePoints.forEach((point) => {
    point.addEventListener("click", () => {
      const index = point.getAttribute("data-index");

      // Mostra solo la coppia di immagini corrispondente
      imagePairs.forEach((pair) => {
        if (pair.getAttribute("data-index") === index) {
          pair.style.display = "flex"; // Mostra la coppia di immagini
        } else {
          pair.style.display = "none"; // Nascondi le altre coppie
        }
      });

      // Mostra solo la descrizione corrispondente
      descriptions.forEach((desc) => {
        if (desc.getAttribute("data-index") === index) {
          desc.classList.add("active");
        } else {
          desc.classList.remove("active");
        }
      });
    });
  });

  // Imposta la prima immagine e descrizione come attiva all'avvio
  if (timelinePoints.length > 0) {
    timelinePoints[0].click();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const timelinePoints = document.querySelectorAll(".timeline-point");

  timelinePoints.forEach((point) => {
    point.addEventListener("click", () => {
      // Rimuovi la classe 'selected' da tutti i punti
      timelinePoints.forEach((p) => p.classList.remove("selected"));

      // Aggiungi la classe 'selected' al punto cliccato
      point.classList.add("selected");
    });
  });

  // Imposta il primo punto come selezionato all'avvio
  if (timelinePoints.length > 0) {
    timelinePoints[0].classList.add("selected");
  }
});
