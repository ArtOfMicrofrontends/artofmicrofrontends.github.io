import * as React from 'react';

interface ImageProps {
  source: string;
  fallback: string;
  alt?: string;
  width?: number;
  height?: number;
}

function getType(file: string) {
  return `image/${file.substring(file.lastIndexOf('.') + 1)}`;
}

function Image({ source, fallback, alt, width, height }: ImageProps) {
  return (
    <picture>
      <source srcSet={source} type={getType(source)} />
      <source srcSet={fallback} type={getType(fallback)} />
      <img src={fallback} alt={alt} width={width} height={height} />
    </picture>
  );
}

export default Image;
