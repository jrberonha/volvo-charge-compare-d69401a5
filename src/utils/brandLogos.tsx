import { Car } from 'lucide-react';

// Logos das marcas principais como componentes SVG ou texto estilizado
export const BrandLogos: Record<string, React.ReactNode> = {
  'BMW': (
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      BMW
    </div>
  ),
  'AUDI': (
    <div className="flex gap-0.5 items-center">
      <div className="w-3 h-3 rounded-full border-2 border-foreground/70" />
      <div className="w-3 h-3 rounded-full border-2 border-foreground/70" />
      <div className="w-3 h-3 rounded-full border-2 border-foreground/70" />
      <div className="w-3 h-3 rounded-full border-2 border-foreground/70" />
    </div>
  ),
  'MERCEDES-BENZ': (
    <div className="w-14 h-14 rounded-full border-2 border-foreground/70 flex items-center justify-center relative">
      <div className="absolute w-0.5 h-7 bg-foreground/70 rotate-0 top-1" />
      <div className="absolute w-6 h-0.5 bg-foreground/70 rotate-[60deg] top-5" />
      <div className="absolute w-6 h-0.5 bg-foreground/70 rotate-[-60deg] top-5" />
    </div>
  ),
  'MERCEDES': (
    <div className="w-14 h-14 rounded-full border-2 border-foreground/70 flex items-center justify-center relative">
      <div className="absolute w-0.5 h-7 bg-foreground/70 rotate-0 top-1" />
      <div className="absolute w-6 h-0.5 bg-foreground/70 rotate-[60deg] top-5" />
      <div className="absolute w-6 h-0.5 bg-foreground/70 rotate-[-60deg] top-5" />
    </div>
  ),
  'VOLKSWAGEN': (
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
      VW
    </div>
  ),
  'VW': (
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
      VW
    </div>
  ),
  'TOYOTA': (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <div className="absolute w-10 h-6 border-2 border-foreground/70 rounded-full" />
      <div className="absolute w-6 h-8 border-2 border-foreground/70 rounded-full rotate-90" />
    </div>
  ),
  'HONDA': (
    <div className="w-14 h-14 border-4 border-foreground/70 rounded-sm flex items-center justify-center font-bold text-lg">
      H
    </div>
  ),
  'HYUNDAI': (
    <div className="w-14 h-14 border-2 border-foreground/70 rounded-full flex items-center justify-center italic font-bold text-2xl">
      H
    </div>
  ),
  'BYD': (
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      BYD
    </div>
  ),
  'GWM': (
    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      GWM
    </div>
  ),
  'CHEVROLET': (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-yellow-400 stroke-yellow-600" strokeWidth="0.5">
        <path d="M12 2L2 8l10 6 10-6-10-6zm0 11L4 8.5v7L12 20l8-4.5v-7L12 13z" />
      </svg>
    </div>
  ),
  'FIAT': (
    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      FIAT
    </div>
  ),
  'RENAULT': (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-yellow-400 stroke-foreground/70" strokeWidth="0.5">
        <path d="M12 2L6 12l6 10 6-10-6-10zm0 4l3 6-3 5-3-5 3-6z" />
      </svg>
    </div>
  ),
  'NISSAN': (
    <div className="w-14 h-14 rounded-full border-2 border-foreground/70 flex items-center justify-center font-bold text-base">
      NISSAN
    </div>
  ),
  'JEEP': (
    <div className="w-16 h-16 flex items-center justify-center">
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-0.5">
          <div className="w-2 h-2 bg-foreground/70" />
          <div className="w-2 h-2 bg-foreground/70" />
          <div className="w-2 h-2 bg-foreground/70" />
          <div className="w-2 h-2 bg-foreground/70" />
          <div className="w-2 h-2 bg-foreground/70" />
          <div className="w-2 h-2 bg-foreground/70" />
          <div className="w-2 h-2 bg-foreground/70" />
        </div>
        <div className="text-xs font-bold text-center">JEEP</div>
      </div>
    </div>
  ),
  'FORD': (
    <div className="w-16 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold italic text-lg shadow-lg">
      FORD
    </div>
  ),
  'VOLVO': (
    <div className="w-14 h-14 rounded-full border-2 border-foreground/70 flex items-center justify-center relative">
      <div className="absolute w-0.5 h-8 bg-foreground/70" />
      <div className="absolute w-8 h-0.5 bg-foreground/70" />
      <div className="text-xs font-bold absolute top-8">VOLVO</div>
    </div>
  ),
  'LEXUS': (
    <div className="w-14 h-14 rounded-full border-2 border-foreground/70 flex items-center justify-center font-bold italic text-2xl">
      L
    </div>
  ),
  'PORSCHE': (
    <div className="w-14 h-14 border-2 border-yellow-600 bg-yellow-50 flex items-center justify-center font-bold text-sm">
      PORSCHE
    </div>
  ),
  'LAND ROVER': (
    <div className="w-16 h-14 rounded-sm bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center text-white font-bold text-xs shadow-lg">
      LAND<br/>ROVER
    </div>
  ),
  'JAGUAR': (
    <div className="w-16 h-14 rounded-sm bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-lg">
      JAGUAR
    </div>
  ),
  'TESLA': (
    <div className="w-16 h-16 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-foreground/70">
        <path d="M12 4L4 8v3h16V8l-8-4zm-6 8v8h4v-8H6zm6 0v8h4v-8h-4z" />
      </svg>
    </div>
  ),
  'GENESIS': (
    <div className="w-14 h-14 flex items-center justify-center">
      <div className="relative w-10 h-10">
        <div className="absolute w-10 h-0.5 bg-foreground/70 top-0 left-0" />
        <div className="absolute w-10 h-0.5 bg-foreground/70 bottom-0 left-0" />
        <div className="absolute w-0.5 h-4 bg-foreground/70 top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute w-6 h-0.5 bg-foreground/70 top-2 left-1/2 -translate-x-1/2 rotate-[30deg]" />
        <div className="absolute w-6 h-0.5 bg-foreground/70 top-2 left-1/2 -translate-x-1/2 rotate-[-30deg]" />
      </div>
    </div>
  ),
  'KIA': (
    <div className="w-14 h-14 rounded-full border-2 border-red-600 flex items-center justify-center font-bold text-xl text-red-600">
      KIA
    </div>
  ),
  'PEUGEOT': (
    <div className="w-14 h-14 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-foreground/70" strokeWidth="1.5">
        <path d="M8 6L12 2L16 6M8 18L12 22L16 18M12 2V22" />
      </svg>
    </div>
  ),
  'CITROËN': (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-0.5">
        <div className="w-2 h-4 bg-foreground/70 transform -skew-x-12" />
        <div className="w-2 h-4 bg-foreground/70 transform skew-x-12" />
      </div>
    </div>
  ),
  'CITROEN': (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-0.5">
        <div className="w-2 h-4 bg-foreground/70 transform -skew-x-12" />
        <div className="w-2 h-4 bg-foreground/70 transform skew-x-12" />
      </div>
    </div>
  ),
  'CAOA CHERY': (
    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xs shadow-lg">
      CHERY
    </div>
  ),
  'CHERY': (
    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm shadow-lg">
      CHERY
    </div>
  ),
  'JAC MOTORS': (
    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      JAC
    </div>
  ),
  'JAC': (
    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      JAC
    </div>
  ),
  'SUBARU': (
    <div className="flex items-center justify-center w-14 h-14">
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-blue-600">
        <circle cx="12" cy="8" r="1.5" />
        <circle cx="8" cy="12" r="1.5" />
        <circle cx="16" cy="12" r="1.5" />
        <circle cx="10" cy="16" r="1.5" />
        <circle cx="14" cy="16" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    </div>
  ),
  'SUZUKI': (
    <div className="w-16 h-16 flex items-center justify-center text-red-600 font-bold text-lg">
      SUZUKI
    </div>
  ),
  'MINI': (
    <div className="w-14 h-14 rounded-full border-4 border-foreground/70 flex items-center justify-center font-bold text-xs">
      MINI
    </div>
  ),
  'MITSUBISHI': (
    <div className="flex items-center justify-center w-14 h-14">
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-red-600">
        <path d="M12 2L6 8L12 14L18 8L12 2Z" />
        <path d="M6 10L2 14L6 18L10 14L6 10Z" />
        <path d="M18 10L14 14L18 18L22 14L18 10Z" />
      </svg>
    </div>
  ),
  'RAM': (
    <div className="w-14 h-14 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-foreground/70">
        <path d="M6 12L12 6L18 12M6 18L12 12L18 18" strokeWidth="2" />
      </svg>
    </div>
  ),
};

/**
 * Retorna o logo da marca se disponível, senão retorna ícone genérico
 */
export function getBrandLogo(brand: string): React.ReactNode {
  const normalizedBrand = brand.toUpperCase().trim();
  
  if (BrandLogos[normalizedBrand]) {
    return BrandLogos[normalizedBrand];
  }
  
  // Fallback: ícone genérico de carro
  return <Car className="h-10 w-10 text-primary" />;
}
