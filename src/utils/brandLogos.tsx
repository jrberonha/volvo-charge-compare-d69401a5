import { Car } from 'lucide-react';
import React from 'react';

// Import brand logos (SVG files downloaded successfully)
import BMWLogo from '@/assets/logos/bmw.svg';
import AudiLogo from '@/assets/logos/audi.svg';
import MercedesLogo from '@/assets/logos/mercedes.svg';
import VolvoLogo from '@/assets/logos/volvo.svg';
import LexusLogo from '@/assets/logos/lexus.png';
import PorscheLogo from '@/assets/logos/porsche.svg';
import TeslaLogo from '@/assets/logos/tesla.svg';
import LandRoverLogo from '@/assets/logos/land-rover.svg';
import JaguarLogo from '@/assets/logos/jaguar.svg';
import GenesisLogo from '@/assets/logos/genesis.png';
import FiatLogo from '@/assets/logos/fiat.svg';
import ChevroletLogo from '@/assets/logos/chevrolet.svg';
import VolkswagenLogo from '@/assets/logos/volkswagen.svg';
import RenaultLogo from '@/assets/logos/renault.svg';
import NissanLogo from '@/assets/logos/nissan.svg';
import ToyotaLogo from '@/assets/logos/toyota.svg';
import HondaLogo from '@/assets/logos/honda.svg';
import HyundaiLogo from '@/assets/logos/hyundai.svg';
import MitsubishiLogo from '@/assets/logos/mitsubishi.svg';
import FordLogo from '@/assets/logos/ford.svg';
import JeepLogo from '@/assets/logos/jeep.svg';
import RamLogo from '@/assets/logos/ram.svg';
import PeugeotLogo from '@/assets/logos/peugeot.svg';
import CitroenLogo from '@/assets/logos/citroen.svg';
import KiaLogo from '@/assets/logos/kia.svg';
import SubaruLogo from '@/assets/logos/subaru.svg';
import SuzukiLogo from '@/assets/logos/suzuki.svg';
import MiniLogo from '@/assets/logos/mini.svg';

// Componente wrapper para aplicar estilo monocromático uniforme
const LogoWrapper = ({ src, alt }: { src: string; alt: string }) => (
  <img 
    src={src} 
    alt={alt} 
    className="w-16 h-16 object-contain grayscale brightness-0 opacity-70"
  />
);

// Fallback para marcas sem logo (texto simples e consistente)
const TextLogo = ({ text }: { text: string }) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <span className="text-foreground/70 font-bold text-xs text-center">{text}</span>
  </div>
);

export const BrandLogos: Record<string, React.ReactNode> = {
  'BMW': <LogoWrapper src={BMWLogo} alt="BMW" />,
  'AUDI': <LogoWrapper src={AudiLogo} alt="Audi" />,
  'MERCEDES-BENZ': <LogoWrapper src={MercedesLogo} alt="Mercedes-Benz" />,
  'MERCEDES': <LogoWrapper src={MercedesLogo} alt="Mercedes" />,
  'VOLVO': <LogoWrapper src={VolvoLogo} alt="Volvo" />,
  'LEXUS': <LogoWrapper src={LexusLogo} alt="Lexus" />,
  'PORSCHE': <LogoWrapper src={PorscheLogo} alt="Porsche" />,
  'TESLA': <LogoWrapper src={TeslaLogo} alt="Tesla" />,
  'LAND ROVER': <LogoWrapper src={LandRoverLogo} alt="Land Rover" />,
  'JAGUAR': <LogoWrapper src={JaguarLogo} alt="Jaguar" />,
  'GENESIS': <LogoWrapper src={GenesisLogo} alt="Genesis" />,
  'FIAT': <LogoWrapper src={FiatLogo} alt="Fiat" />,
  'CHEVROLET': <LogoWrapper src={ChevroletLogo} alt="Chevrolet" />,
  'VOLKSWAGEN': <LogoWrapper src={VolkswagenLogo} alt="Volkswagen" />,
  'VW': <LogoWrapper src={VolkswagenLogo} alt="VW" />,
  'RENAULT': <LogoWrapper src={RenaultLogo} alt="Renault" />,
  'NISSAN': <LogoWrapper src={NissanLogo} alt="Nissan" />,
  'TOYOTA': <LogoWrapper src={ToyotaLogo} alt="Toyota" />,
  'HONDA': <LogoWrapper src={HondaLogo} alt="Honda" />,
  'HYUNDAI': <LogoWrapper src={HyundaiLogo} alt="Hyundai" />,
  'MITSUBISHI': <LogoWrapper src={MitsubishiLogo} alt="Mitsubishi" />,
  'FORD': <LogoWrapper src={FordLogo} alt="Ford" />,
  'JEEP': <LogoWrapper src={JeepLogo} alt="Jeep" />,
  'RAM': <LogoWrapper src={RamLogo} alt="Ram" />,
  'BYD': <TextLogo text="BYD" />,
  'GWM': <TextLogo text="GWM" />,
  'CAOA CHERY': <TextLogo text="CHERY" />,
  'CHERY': <TextLogo text="CHERY" />,
  'JAC MOTORS': <TextLogo text="JAC" />,
  'JAC': <TextLogo text="JAC" />,
  'PEUGEOT': <LogoWrapper src={PeugeotLogo} alt="Peugeot" />,
  'CITROËN': <LogoWrapper src={CitroenLogo} alt="Citroën" />,
  'CITROEN': <LogoWrapper src={CitroenLogo} alt="Citroen" />,
  'KIA': <LogoWrapper src={KiaLogo} alt="Kia" />,
  'SUBARU': <LogoWrapper src={SubaruLogo} alt="Subaru" />,
  'SUZUKI': <LogoWrapper src={SuzukiLogo} alt="Suzuki" />,
  'MINI': <LogoWrapper src={MiniLogo} alt="Mini" />,
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
