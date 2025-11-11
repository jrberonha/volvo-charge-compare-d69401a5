import { Car } from 'lucide-react';
import React from 'react';

// Import brand logos
import BMWLogo from '@/assets/logos/bmw.svg';
import AudiLogo from '@/assets/logos/audi.svg';
import MercedesLogo from '@/assets/logos/mercedes.png';
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
import BYDLogo from '@/assets/logos/byd.png';
import GWMLogo from '@/assets/logos/gwm.png';
import CheryLogo from '@/assets/logos/chery.png';
import JACLogo from '@/assets/logos/jac.png';
import PeugeotLogo from '@/assets/logos/peugeot.svg';
import CitroenLogo from '@/assets/logos/citroen.svg';
import KiaLogo from '@/assets/logos/kia.svg';
import SubaruLogo from '@/assets/logos/subaru.svg';
import SuzukiLogo from '@/assets/logos/suzuki.svg';
import MiniLogo from '@/assets/logos/mini.svg';

// Logos das marcas principais usando arquivos de logo reais
export const BrandLogos: Record<string, React.ReactNode> = {
  'BMW': <img src={BMWLogo} alt="BMW" className="w-full h-full object-contain p-2" />,
  'AUDI': <img src={AudiLogo} alt="Audi" className="w-full h-full object-contain p-2" />,
  'MERCEDES-BENZ': <img src={MercedesLogo} alt="Mercedes-Benz" className="w-full h-full object-contain p-2" />,
  'MERCEDES': <img src={MercedesLogo} alt="Mercedes" className="w-full h-full object-contain p-2" />,
  'VOLVO': <img src={VolvoLogo} alt="Volvo" className="w-full h-full object-contain p-2" />,
  'LEXUS': <img src={LexusLogo} alt="Lexus" className="w-full h-full object-contain p-2" />,
  'PORSCHE': <img src={PorscheLogo} alt="Porsche" className="w-full h-full object-contain p-2" />,
  'TESLA': <img src={TeslaLogo} alt="Tesla" className="w-full h-full object-contain p-2" />,
  'LAND ROVER': <img src={LandRoverLogo} alt="Land Rover" className="w-full h-full object-contain p-2" />,
  'JAGUAR': <img src={JaguarLogo} alt="Jaguar" className="w-full h-full object-contain p-2" />,
  'GENESIS': <img src={GenesisLogo} alt="Genesis" className="w-full h-full object-contain p-2" />,
  'FIAT': <img src={FiatLogo} alt="Fiat" className="w-full h-full object-contain p-2" />,
  'CHEVROLET': <img src={ChevroletLogo} alt="Chevrolet" className="w-full h-full object-contain p-2" />,
  'VOLKSWAGEN': <img src={VolkswagenLogo} alt="Volkswagen" className="w-full h-full object-contain p-2" />,
  'VW': <img src={VolkswagenLogo} alt="VW" className="w-full h-full object-contain p-2" />,
  'RENAULT': <img src={RenaultLogo} alt="Renault" className="w-full h-full object-contain p-2" />,
  'NISSAN': <img src={NissanLogo} alt="Nissan" className="w-full h-full object-contain p-2" />,
  'TOYOTA': <img src={ToyotaLogo} alt="Toyota" className="w-full h-full object-contain p-2" />,
  'HONDA': <img src={HondaLogo} alt="Honda" className="w-full h-full object-contain p-2" />,
  'HYUNDAI': <img src={HyundaiLogo} alt="Hyundai" className="w-full h-full object-contain p-2" />,
  'MITSUBISHI': <img src={MitsubishiLogo} alt="Mitsubishi" className="w-full h-full object-contain p-2" />,
  'FORD': <img src={FordLogo} alt="Ford" className="w-full h-full object-contain p-2" />,
  'JEEP': <img src={JeepLogo} alt="Jeep" className="w-full h-full object-contain p-2" />,
  'RAM': <img src={RamLogo} alt="Ram" className="w-full h-full object-contain p-2" />,
  'BYD': <img src={BYDLogo} alt="BYD" className="w-full h-full object-contain p-2" />,
  'GWM': <img src={GWMLogo} alt="GWM" className="w-full h-full object-contain p-2" />,
  'CAOA CHERY': <img src={CheryLogo} alt="Caoa Chery" className="w-full h-full object-contain p-2" />,
  'CHERY': <img src={CheryLogo} alt="Chery" className="w-full h-full object-contain p-2" />,
  'JAC MOTORS': <img src={JACLogo} alt="JAC Motors" className="w-full h-full object-contain p-2" />,
  'JAC': <img src={JACLogo} alt="JAC" className="w-full h-full object-contain p-2" />,
  'PEUGEOT': <img src={PeugeotLogo} alt="Peugeot" className="w-full h-full object-contain p-2" />,
  'CITROËN': <img src={CitroenLogo} alt="Citroën" className="w-full h-full object-contain p-2" />,
  'CITROEN': <img src={CitroenLogo} alt="Citroen" className="w-full h-full object-contain p-2" />,
  'KIA': <img src={KiaLogo} alt="Kia" className="w-full h-full object-contain p-2" />,
  'SUBARU': <img src={SubaruLogo} alt="Subaru" className="w-full h-full object-contain p-2" />,
  'SUZUKI': <img src={SuzukiLogo} alt="Suzuki" className="w-full h-full object-contain p-2" />,
  'MINI': <img src={MiniLogo} alt="Mini" className="w-full h-full object-contain p-2" />,
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
