import React, { useState } from 'react'; // Importiere React und useState Hook
import LegungBox from './components/LegungBox'; // Importiere LegungBox Komponente
import CardsBox from './components/CardsBox'; // Importiere CardsBox Komponente
import legungen from './legungen'; // Importiere die Legungen-Daten

// Hauptkomponente der App
function App() {
  // Zustand für die aktive Legung (Tafel) und die ausgewählten Karten
  const [activeLegung, setActiveLegung] = useState(null);
  const [selectedCards, setSelectedCards] = useState(null);

  // Handler, wenn ein Kartenset ausgewählt wird
  const handleCardSetSelect = (cards) => {
    console.log("Card set selected:", cards); // Logge die ausgewählten Karten
    setSelectedCards(cards); // Setze die ausgewählten Karten
    setActiveLegung(null); // Deaktiviere die aktuelle Legung (optional)
  };

  // Handler, wenn eine Legung (Tafel) ausgewählt wird
  const handleLegungSelect = (component) => {
    console.log("Legung selected:", component); // Logge die ausgewählte Legung
    setActiveLegung(component); // Setze die aktive Legung
    setSelectedCards(null); // Deaktiviere das aktuelle Kartenset (optional)
  };

  console.log("Rendering App with legungen:", legungen); // Logge die geladenen Legungen

  return (
    <div className="container mx-auto p-4">
      {/* Haupttitel */}
      <h1 className="my-8 text-center text-5xl font-bold">Herzlich Willkommen in den Positive Psychologie Spiel</h1>
      {/* Untertitel */}
      <h3 className="text-center text-3xl mb-8">Bitte wählen Sie eine Tafel</h3>
      
      {/* Gitter für die Auswahl der Legungen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mappe durch die Legungen und rendere für jede eine LegungBox */}
        {legungen.map((legung, index) => (
          <LegungBox
            key={index} // Einzigartiger Schlüssel für jedes Element
            title={legung.title} // Titel der Legung
            image={legung.image} // Bild der Legung
            info={legung.info} // Information über die Legung
            onClick={() => handleLegungSelect(legung.component)} // Klick-Handler für die Legung
          />
        ))}
      </div>
      
      {/* Zeige die aktive Legung, wenn eine ausgewählt wurde */}
      {activeLegung && (
        <div className="mt-8">
          {activeLegung} {/* Die ausgewählte Legungskomponente */}
        </div>
      )}
      
      {/* Zeige die CardsBox, wenn keine Legung aktiv ist */}
      {!activeLegung && (
        <div className="mt-8">
          <CardsBox onCardSetSelect={handleCardSetSelect} /> {/* Klick-Handler für das Kartenset */}
        </div>
      )}
      
      {/* Zeige die ausgewählten Karten, wenn vorhanden */}
      {selectedCards && (
        <div className="mt-8">
          {/* Hier können die Karten angezeigt oder weitere Aktionen durchgeführt werden */}
          <p>Selected Cards:</p>
          <pre>{JSON.stringify(selectedCards, null, 2)}</pre> {/* Zeige die ausgewählten Karten als JSON */}
        </div>
      )}
    </div>
  );
}

export default App; // Exportiere die App-Komponente
