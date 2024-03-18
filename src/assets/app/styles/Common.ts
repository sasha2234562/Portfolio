type FontProps = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin: number;
  Fmax: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontProps) => `
font-family: ${family || 'Epilogue, serif'};
font-weight: ${weight || '400'};
color: ${color || '#2D2C2C'};
line-height: ${{ lineHeight } || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
