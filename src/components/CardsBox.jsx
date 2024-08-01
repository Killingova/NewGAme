import React from 'react';
import cardSets from '../cardSets';

function CardsBox({ onCardSetSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardSets.map((set, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-lg cursor-pointer" onClick={() => {
          console.log("Selecting card set:", set.name);
          onCardSetSelect(set.cards);
        }}>
          <h2 className="text-2xl font-bold mt-4">{set.name}</h2>
          <p className="mt-2">{`${set.cards ? set.cards.length : 'Unbekannte Anzahl'} Karten`}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsBox;
