import React from 'react';

function KeltischesKreuz() {
  const positionsInfo = [
    "Die gegenwärtige Situation oder das Hauptthema: Diese Karte beschreibt die aktuelle Situation oder das zentrale Thema der Frage. Sie gibt einen Überblick über die momentane Lage.",
    "Das unmittelbare Hindernis oder die Herausforderung: Diese Karte zeigt ein Ereignis, eine Person oder ein Gefühl, das die Ausgangssituation entweder behindert oder fördert. Sie stellt die unmittelbare Herausforderung dar, die gemeistert werden muss.",
    "Bewusste Einflüsse oder was Sie bewusst wahrnehmen: Diese Karte repräsentiert das, was der Fragende rational über die Situation denkt. Es zeigt das bewusste Ziel oder die bewusste Ebene der Situation.",
    "Unbewusste Einflüsse oder was unter der Oberfläche verborgen ist: Diese Position zeigt tiefer liegende, unbewusste Einflüsse und Emotionen. Sie repräsentiert das Fundament der Situation, das oft nicht sofort erkennbar ist.",
    "Die Vergangenheit oder das, was hinter Ihnen liegt: Diese Karte gibt Hinweise auf die jüngste Vergangenheit und die Ursachen, die zur aktuellen Situation geführt haben.",
    "Die Zukunft oder das, was vor Ihnen liegt: Diese Karte gibt einen Ausblick auf die nahe Zukunft und die kommenden Einflüsse.",
    "Ihr persönlicher Standpunkt oder Ihre Rolle in der Situation: Diese Position reflektiert die Einstellung und Verfassung des Fragenden in Bezug auf die Situation. Sie zeigt, wie der Fragende selbst zur Situation steht.",
    "Externe Einflüsse oder die Menschen und Umstände um Sie herum: Diese Karte zeigt das Umfeld, einschließlich der Einflüsse anderer Personen und der äußeren Umstände, die auf die Situation einwirken.",
    "Hoffnungen und Ängste in Bezug auf die Situation: Diese Karte repräsentiert die Erwartungen, Hoffnungen und Ängste des Fragenden in Bezug auf die Situation.",
    "Das endgültige Ergebnis oder die wahrscheinliche Zukunft: Diese Position zeigt das langfristige Ergebnis oder den Höhepunkt der Situation, sofern die aktuellen Umstände unverändert bleiben."
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Keltisches Kreuz</h2>
      <p className="mb-4">Eine umfassende Legung für tiefgehende Analysen.</p>
      <div className="grid grid-cols-7 gap-4 justify-center items-center">
        <div className="col-span-7 grid grid-cols-7 gap-4">
          <div className="col-start-5 col-span-1 row-start-1 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 10:</strong> {positionsInfo[9]}
          </div>
          <div className="col-start-3 col-span-1 row-start-2 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 3:</strong> {positionsInfo[2]}
          </div>
          <div className="col-start-6 col-span-1 row-start-2 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 9:</strong> {positionsInfo[8]}
          </div>
          <div className="col-start-2 col-span-1 row-start-3 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 5:</strong> {positionsInfo[4]}
          </div>
          <div className="col-start-3 col-span-1 row-start-3 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 1:</strong> {positionsInfo[0]}
          </div>
          <div className="col-start-4 col-span-1 row-start-3 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 2:</strong> {positionsInfo[1]}
          </div>
          <div className="col-start-5 col-span-1 row-start-3 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 6:</strong> {positionsInfo[5]}
          </div>
          <div className="col-start-6 col-span-1 row-start-3 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 8:</strong> {positionsInfo[7]}
          </div>
          <div className="col-start-3 col-span-1 row-start-4 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 4:</strong> {positionsInfo[3]}
          </div>
          <div className="col-start-6 col-span-1 row-start-4 row-span-1 border border-black text-center cursor-pointer flex items-center justify-center">
            <strong>Position 7:</strong> {positionsInfo[6]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeltischesKreuz;
