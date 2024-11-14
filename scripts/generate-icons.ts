import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import * as lucide from 'lucide';
import { createCanvas } from 'canvas';

async function generateIcon(size: number, filename: string) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Set background color
  ctx.fillStyle = '#3b0764'; // Purple background matching your theme
  ctx.fillRect(0, 0, size, size);
  
  // Draw the Code2 icon
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size / 16;
  const padding = size / 4;
  const iconSize = size - (padding * 2);
  
  const code2Icon = lucide.icons.code2;
  const path = new Path2D(code2Icon.path);
  
  ctx.save();
  ctx.translate(padding, padding);
  ctx.scale(iconSize/24, iconSize/24); // Scale from default 24x24 to target size
  ctx.stroke(path);
  ctx.restore();
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  await writeFile(resolve(process.cwd(), `public/${filename}`), buffer);
}

async function main() {
  try {
    await generateIcon(32, 'favicon.png');
    await generateIcon(192, 'icon-192.png');
    await generateIcon(512, 'icon-512.png');
    await generateIcon(180, 'apple-touch-icon.png');
    console.log('Icons generated successfully');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

main(); 