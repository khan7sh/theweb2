import { writeFileSync } from 'fs';
import { resolve } from 'path';

const generateSVG = (size: number) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#3b0764"/>
  <path d="M${size/3} ${size*0.389} l-${size*0.111} ${size*0.111} l${size*0.111} ${size*0.111} 
           M${size*0.667} ${size*0.389} l${size*0.111} ${size*0.111} l-${size*0.111} ${size*0.111} 
           M${size*0.583} ${size*0.278} l-${size*0.167} ${size*0.444}" 
        stroke="white" 
        stroke-width="${size*0.067}"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"/>
</svg>`;

const sizes = {
  'favicon': 32,
  'icon-192': 192,
  'icon-512': 512,
  'apple-touch-icon': 180
};

try {
  Object.entries(sizes).forEach(([name, size]) => {
    const svg = generateSVG(size);
    writeFileSync(resolve(process.cwd(), `public/${name}.svg`), svg);
    console.log(`Generated ${name}.svg`);
  });
} catch (error) {
  console.error('Error generating icons:', error);
  process.exit(1);
} 