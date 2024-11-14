import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Code2 } from 'lucide-react';

const sizes = {
  favicon: 32,
  'icon-192': 192,
  'icon-512': 512,
  'apple-touch-icon': 180
};

async function generateIcon(name: string, size: number) {
  const svg = renderToString(
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: '#3b0764' }}
    >
      <Code2 
        color="#ffffff" 
        size={size * 0.5} 
        style={{ 
          transform: `translate(${size * 0.25}px, ${size * 0.25}px)` 
        }} 
      />
    </svg>
  );

  // Convert SVG to data URL
  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  
  // Create a temporary image element
  const img = document.createElement('img');
  img.src = dataUrl;
  
  // Convert to PNG using Canvas
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  await new Promise((resolve, reject) => {
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      canvas.toBlob(async (blob) => {
        try {
          const buffer = Buffer.from(await blob.arrayBuffer());
          await writeFile(resolve(process.cwd(), `public/${name}.png`), buffer);
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 'image/png');
    };
    img.onerror = reject;
  });
}

async function main() {
  try {
    for (const [name, size] of Object.entries(sizes)) {
      await generateIcon(name, size);
    }
    console.log('Icons generated successfully');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

main(); 