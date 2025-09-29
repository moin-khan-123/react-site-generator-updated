import React from 'react';

const words = ['Quick', 'Fast', 'Speedy'];
const randomWord = words[Math.floor(Math.random() * words.length)];

export default function Hero() {
  return (
    <section style={{ marginBottom: 24 }}>
      <h1>{randomWord} delivery service in dhaka.</h1>
    </section>
  );
}
