import React from 'react';
import KeltischesKreuz from './components/KeltischesKreuz';
import LebensbaumLegung from './components/LebensbaumLegung';
import AstrologischeLegung from './components/AstrologischeLegung';
import ChakraLegung from './components/ChakraLegung';
import BeziehungsKompass from './components/BeziehungsKompass';
import PentagrammLegung from './components/PentagrammLegung';
import PyramidenLegung from './components/PyramidenLegung';
import GrosseTafel from './components/GrosseTafel';
import HufeisenLegung from './components/HufeisenLegung';

const legungen = [
  {
    title: 'Keltisches Kreuz',
    image: '/images/keltischeskreuz.jpg',
    info: 'Eine umfassende Legung für tiefgehende Analysen.',
    component: <KeltischesKreuz />
  },
  {
    title: 'Lebensbaum-Legung',
    image: '/images/lebensbaum.jpg',
    info: 'Eine spirituelle Legung basierend auf dem Kabbalistischen Lebensbaum.',
    component: <LebensbaumLegung />
  },
  {
    title: 'Astrologische Legung',
    image: '/images/astrologische.jpg',
    info: 'Eine umfassende Analyse der verschiedenen Lebensbereiche basierend auf den zwölf astrologischen Häusern.',
    component: <AstrologischeLegung />
  },
  {
    title: 'Chakra-Legung',
    image: '/images/image4.jpg',
    info: 'Diese Legung wird verwendet, um energetische Blockaden und Zustände der Chakren zu analysieren.',
    component: <ChakraLegung />
  },
  {
    title: 'Beziehungs-Kompass',
    image: '/images/kompass.jpg',
    info: 'Diese Legung ist konzipiert, um Einblicke in die eigenen Gefühle, Bedürfnisse und die mögliche Zukunft einer Beziehung zu gewinnen.',
    component: <BeziehungsKompass />
  },
  {
    title: 'Pentagramm-Legung',
    image: '/images/pentagramm.jpg',
    info: 'Diese Legung nutzt das alte Symbol des Pentagramms und bietet eine spirituelle und umfassende Sichtweise auf eine Situation.',
    component: <PentagrammLegung />
  },
  {
    title: 'Pyramiden-Legung',
    image: '/images/pyramiden.jpg',
    info: 'Diese Legung verwendet eine Pyramidenform, um die Grundlage, die aktuelle Situation und die zukünftigen Entwicklungen zu analysieren.',
    component: <PyramidenLegung />
  },
  {
    title: '21-Karten-Legung (Große Tafel)',
    image: '/images/21karten.jpg',
    info: 'Diese Legung verwendet 21 Karten, um eine umfassende und detaillierte Analyse einer Situation zu bieten.',
    component: <GrosseTafel />
  },
  {
    title: 'Sieben-Karten-Hufeisen-Legung',
    image: '/images/hufeisen.jpg',
    info: 'Diese Legung wird verwendet, um die Entwicklung eines Ereignisses oder einer Situation zu analysieren.',
    component: <HufeisenLegung />
  }
];

console.log("Legungen loaded:", legungen);

export default legungen;
