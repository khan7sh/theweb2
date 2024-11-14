interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export default function Image({ alt, src, ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '/fallback-image.jpg';
      }}
    />
  );
} 