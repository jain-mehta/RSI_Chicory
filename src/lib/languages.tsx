// This file contains the language data for the language selector.
import React from 'react';

export type Language = {
  code: string;
  name: string;
  flag: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const EnglishFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" {...props}>
        <rect width="5" height="3" fill="#00247d"/>
        <path d="M0 0h5v3H0z" fill="#fff"/>
        <path d="m0 0 5 3m0-3-5 3" stroke="#cf142b" strokeWidth=".6"/>
        <path d="M0 0h5v3H0z" stroke="#fff" strokeWidth=".2"/>
        <path d="M2.5 0v3m-2.5 1.5h5" stroke="#cf142b" strokeWidth="1"/>
    </svg>
);

const SpanishFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" {...props}>
        <path fill="#C60B1E" d="M0 0h3v2H0z"/>
        <path fill="#FFC400" d="M0 .5h3v1H0z"/>
    </svg>
);

const FrenchFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" {...props}>
        <path fill="#ED2939" d="M0 0h3v2H0z"/>
        <path fill="#fff" d="M0 0h2v2H0z"/>
        <path fill="#002395" d="M0 0h1v2H0z"/>
    </svg>
);

const ArabicFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" {...props}>
        <path fill="#007A3D" d="M0 0h9v3H0z"/>
        <path fill="#fff" d="M0 2h9v2H0z"/>
        <path d="M0 3h9v3H0z"/>
        <path fill="#CE1126" d="m0 0 4 3-4 3z"/>
    </svg>
);


export const LANGUAGES: Language[] = [
  { code: 'ENG', name: 'English', flag: EnglishFlag },
  { code: 'ESP', name: 'Español', flag: SpanishFlag },
  { code: 'FRA', name: 'Français', flag: FrenchFlag },
  { code: 'ARA', name: 'العربية', flag: ArabicFlag },
];
