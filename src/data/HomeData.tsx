import { FaUserDoctor, FaUserCheck, FaSyringe } from 'react-icons/fa6';
import { FaRegHandshake } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

import hero from '../assets/images/hero.jpg';
import hero_low_res from '../assets/images/hero_low_res.jpg';
import hero_low_res_dark from '../assets/images/hero_low_res_dark.jpg';

import stomatoloski_konsultativni_pregledi from '../assets/images/stomatoloski_konsultativni_pregledi.png';
import estetska_stomatologija from '../assets/images/estetska_stomatologija.jpg';
import stomatoloska_protetika from '../assets/images/stomatoloska_protetika.jpg';
import konzervativna_stomatologija_i_endodoncija from '../assets/images/konzervativna_stomatologija_i_endodoncija.jpg';
import decija_i_preventivna_stomatologija from '../assets/images/decija_i_preventivna_stomatologija.jpg';
import parodontologija from '../assets/images/parodontologija.jpg';
import zub_light from '../assets/images/zub_light.png';
import zub_dark from '../assets/images/zub_dark.png';
import { use } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export const HomeData = () => {
   const { darkMode } = use(DarkModeContext);
   return {
      servicesTitle: 'Usluge',
      servicesTitleDesc:
         'Pružamo sve vrste stomatoloških usluga, na jednom mestu kroz individualan pristup svakom pacijentu. Znanje, posvećenost i predanost poslu, naša su najveća vrednost i garancija Vašeg zadovoljstva!',
      ourQualitiesTitle: 'Naše vrednosti:',
      ourQualitiesList: [
         { text: 'Profesionalnost i znanje', icon: <FaUserDoctor size={25} /> },
         { text: 'Individualan pristup', icon: <FaUserCheck size={25} /> },
         {
            text: 'Savremena oprema i visokokvalitetni materijali',
            icon: <FaSyringe size={25} />
         },
         {
            text: 'Bezbolne intervencije',
            icon: <MdHealthAndSafety size={25} />
         },
         { text: 'Poverenje pacijenata', icon: <FaRegHandshake size={25} /> }
      ],
      servicesList: [
         {
            name: 'Stomatološki konsultativni pregledi',
            descList: [
               'Sistematski pregledi',
               'Demonstracija i obuka pravilnog održavanja oralne higijene'
            ],
            image: stomatoloski_konsultativni_pregledi
         },
         {
            name: 'Estetska stomatologija',
            descList: [
               'Izbeljivanje zuba',
               'Izbeljivanje avitalnih zuba',
               'Kompozitne bele plombe',
               'Kompozitne fasete',
               'Keramičke ljuspice (viniri)'
            ],
            image: estetska_stomatologija
         },
         {
            name: 'Stomatološka protetika',
            descList: [
               'Metalokeramičke krunice i mostovi',
               'Izrada bezmetalnih krunica i mostova',
               'Izrada kombinovanih protetskih radova',
               'Totalne proteze',
               'Parcijalne pločaste proteze',
               'Parcijalne skeletirane proteze',
               'Vertex (ThermoSens) proteze',
               'Kompozitne fasete',
               'Keramičke ljuspice (viniri)',
               'Silikonski splint (folija) za zube'
            ],
            image: stomatoloska_protetika
         },
         {
            name: 'Konzervativna stomatologija i endodoncija',
            descList: [
               'Kompozitne (bele) plombe',
               'Endodontska terapija (lečenje kanala korena) zuba',
               'Restauracija lečenih zuba kompozitnim nadogradnjama'
            ],
            image: konzervativna_stomatologija_i_endodoncija
         },
         {
            name: 'Dečija i preventivna stomatologija',
            descList: [
               'Demonstracija i obuka pravilnog održavanja oralne higijene',
               'Fluorizacija (fluorisanje) zuba',
               'Ekstrakcija mlečnih zuba',
               'Popravka mlečnih zuba',
               'Zalivanje jamica i fisura'
            ],
            image: decija_i_preventivna_stomatologija
         },
         {
            name: 'Parodontologija',
            descList: [
               'Demonstracija i obuka pravilnog održavanja oralne higijene',
               'Ultrazvučno uklanjanje zubnog kamenca i pigmentacija',
               'Kiretaža parodontalnih džepova',
               'Hirurška terapija'
            ],
            image: parodontologija
         }
      ],
      bookAppointment: {
         text: ' Zakažite Vaš stomatološki pregled, jer osmeh ne može da čeka.',
         imageSrc: darkMode ? zub_dark : zub_light,
         phoneHref: 'tel:+381653583313',
         phone: '065/358-33-13'
      },
      hero: {
         heroSrc: hero,
         heroLowResSrc: darkMode ? hero_low_res_dark : hero_low_res
      }
   };
};
