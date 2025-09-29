import React from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';

export default function App({ data }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Hero />
      <Contact phone={data.phone} address={data.address} />
    </div>
  );
}
