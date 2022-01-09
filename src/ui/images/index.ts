import SoudeurHeroPng from './Soudeur.png';
import SoudeurHeroWebp from './Soudeur.webp';
import Logo from './logo.svg';
import SoudeurSmallPng from './soudeur_small.png';
import SoudeurSmallWebp from './soudeur_small.webp';
import AtelierPng from './Atelier.png';
import AtelierWebp from './Atelier.webp';
import JobsHorizontalWebp from './jobs_horizontal.webp';
import JobsHorizontalPng from './jobs_horizontal.png';
import JobsVerticalWebp from './jobs_vertical.webp';
import JobsVerticalPng from './jobs_vertical.png';
import CloturesPng from './gallery/category/clotures.png';
import CloturesWebp from './gallery/category/clotures.webp';
import EscaliersPng from './gallery/category/escaliers.png';
import EscaliersWebp from './gallery/category/escaliers.webp';
import GardeCorpsPng from './gallery/category/garde-corps.png';
import GardeCorpsWebp from './gallery/category/garde-corps.webp';
import GrandsOuvragesPng from './gallery/category/grands_ouvrages.png';
import GrandsOuvragesWebp from './gallery/category/grands_ouvrages.webp';
import HallsDentreePng from './gallery/category/halls_entree.png';
import HallsDentreeWebp from './gallery/category/halls_entree.webp';
import MobiliersPng from './gallery/category/mobilier.png';
import MobiliersWebp from './gallery/category/mobilier.webp';
import PortailsPng from './gallery/category/portails.png';
import PortailsWebp from './gallery/category/portails.webp';
import VerandasPng from './gallery/category/verandas.png';
import VerandasWebp from './gallery/category/verandas.webp';
import VerrieresPng from './gallery/category/verrieres.png';
import VerrieresWebp from './gallery/category/verrieres.webp';
import EmailPng from './contact/email.png';
import EmailWebp from './contact/email.webp';
import FactoryPng from './contact/factory.png';
import FactoryWebp from './contact/factory.webp';
import PhonePng from './contact/phone.png';
import PhoneWebp from './contact/phone.webp';
import Carousel from './gallery/carousel';
import MarkerPng from './marker.png';
import MarkerWebp from './marker.webp';

const images = {
  SoudeurHero: {
    main: SoudeurHeroWebp,
    fallback: SoudeurHeroPng,
  },
  Logo,
  SoudeurSmall: {
    main: SoudeurSmallWebp,
    fallback: SoudeurSmallPng,
  },
  Atelier: {
    main: AtelierWebp,
    fallback: AtelierPng,
  },
  Jobs: {
    hortizontal: {
      main: JobsHorizontalWebp,
      fallback: JobsHorizontalPng,
    },
    vertical: {
      main: JobsVerticalWebp,
      fallback: JobsVerticalPng,
    },
  },
  Marker: {
    main: MarkerWebp,
    fallback: MarkerPng,
  },
  Gallery: {
    Category: {
      Clotures: {
        main: CloturesWebp,
        fallback: CloturesPng,
      },
      Escaliers: {
        main: EscaliersWebp,
        fallback: EscaliersPng,
      },
      GardeCorps: {
        main: GardeCorpsWebp,
        fallback: GardeCorpsPng,
      },
      GrandsOuvrages: {
        main: GrandsOuvragesWebp,
        fallback: GrandsOuvragesPng,
      },
      HallsDentree: {
        main: HallsDentreeWebp,
        fallback: HallsDentreePng,
      },
      Mobiliers: {
        main: MobiliersWebp,
        fallback: MobiliersPng,
      },
      Portails: {
        main: PortailsWebp,
        fallback: PortailsPng,
      },
      Verandas: {
        main: VerandasWebp,
        fallback: VerandasPng,
      },
      Verrieres: {
        main: VerrieresWebp,
        fallback: VerrieresPng,
      },
    },
    Carousel,
  },
  Contact: {
    Email: {
      main: EmailWebp,
      fallback: EmailPng,
    },
    Factory: {
      main: FactoryWebp,
      fallback: FactoryPng,
    },
    Phone: {
      main: PhoneWebp,
      fallback: PhonePng,
    },
  }
}

export default images;