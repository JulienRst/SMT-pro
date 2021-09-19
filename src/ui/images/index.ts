import SoudeurHero from './Soudeur.png';
import Logo from './logo.svg';
import SoudeurSmall from './soudeur_small.png';
import Atelier from './Atelier.png';
import JobsHorizontal from './jobs_horizontal.png';
import JobsVertical from './jobs_vertical.png';
import Clotures from './gallery/category/clotures.png';
import Escaliers from './gallery/category/escaliers.png';
import GardeCorps from './gallery/category/garde-corps.png';
import GrandsOuvrages from './gallery/category/grands_ouvrages.png';
import HallsDentree from './gallery/category/halls_entree.png';
import Mobiliers from './gallery/category/mobilier.png';
import Portails from './gallery/category/portails.png';
import Verandas from './gallery/category/verandas.png';
import Verrieres from './gallery/category/verrieres.png';
import Email from './contact/email.png';
import Factory from './contact/factory.png';
import Phone from './contact/phone.png';
import Carousel from './gallery/carousel';
import Marker from './marker.png';

const images = {
  SoudeurHero,
  Logo,
  SoudeurSmall,
  Atelier,
  Jobs: {
    hortizontal: JobsHorizontal,
    vertical: JobsVertical,
  },
  Marker,
  Gallery: {
    Category: {
      Clotures,
      Escaliers,
      GardeCorps,
      GrandsOuvrages,
      HallsDentree,
      Mobiliers,
      Portails,
      Verandas,
      Verrieres,
    },
    Carousel,
  },
  Contact: {
    Email,
    Factory,
    Phone,
  }
}

export default images;