import azithromycin250 from "../assets/azithromycin-250.jpeg";
import azithromycin500 from "../assets/azithromycin-500.jpeg";
import cenforce100 from "../assets/cenforce-100.jpeg";
import cenforce150 from "../assets/cenforce-150.jpeg";
import cenforce200 from "../assets/cenforce-200.jpeg";
import hetquenil200 from "../assets/hetquenil-200.jpeg";
import hetquenil400 from "../assets/hetquenil-400.jpeg";
import iverheal3 from "../assets/iverheal-3.jpeg";
import iverheal6 from "../assets/iverheal-6.jpeg";
import iverheal12 from "../assets/iverheal-12.jpeg";
import kamagraoraljellys100mg from "../assets/kamagraoraljelly's100mg.jpeg";
import painosoma350 from "../assets/painosoma-350.jpeg";
import painosoma500 from "../assets/painosoma-500.jpeg";
import TestosteroneGel1 from "../assets/TestosteroneGel1.jpeg";
import testastroneblue from "../assets/testosterone-blue.jpeg";
import testastronered from "../assets/testosterone-red.jpeg";
import vidalista20 from "../assets/vidalista-20.jpeg";
import vidalista40 from "../assets/vidalista-40.jpeg";
import vidalista60 from "../assets/vidalista-60.jpeg";
import vidalista80 from "../assets/vidalista-80.jpeg";
import vidalistblack80 from "../assets/vidalista-black-80.jpeg";
import vilitra20 from "../assets/vilitra-20.jpeg";
import vilitra40 from "../assets/vilitra-40.jpeg";
import vilitra60 from "../assets/vilitra-60.jpeg";

import finest1 from "../assets/finest1.jpg";
import doxycycline from "../assets/doxycycline.jpg";
import slimtop from "../assets/slimtop.jpg";
import zopisign from "../assets/zopisign.jpg";
import atomext from "../assets/atomext.jpg";
import moonegil from "../assets/moonegil.jpg";
import lumigun from "../assets/lumigun.jpg";
import headen from "../assets/headen.jpg";
import sildigra from "../assets/sildigra.jpg";
import anavar from "../assets/anavar.jpg";
import danabol from "../assets/danabol.jpg";
import trenbolon from "../assets/trenbolon.jpg";
import rvblesus from "../assets/rvblesus.jpg";
import fitaro from "../assets/fitaro.jpg";

export const data = [
  {
    id: 1,
    name: "Azithromycin 250 MG",
    imageName: azithromycin250,
  },
  {
    id: 2,
    name: "Azithromycin 500 MG",
    imageName: azithromycin500,
  },
  { id: 3, name: "Cialis 20 MG", imageName: vidalista20 },
  { id: 4, name: "Cialis 40 MG", imageName: vidalista40 },
  { id: 5, name: "Cialis 60 MG", imageName: vidalista60 },
  {
    id: 6,
    name: "Cialis 80 mg Yellow",
    imageName: vidalista80,
  },
  {
    id: 7,
    name: "Cialis 80 mg black",
    imageName: vidalistblack80,
  },
  {
    id: 8,
    name: "Hydroxychloroquine 200 MG",
    imageName: hetquenil200,
  },
  {
    id: 9,
    name: "Hydroxychloroquine 200 MG",
    imageName: hetquenil400,
  },
  { id: 10, name: "Ivermectin 3 MG", imageName: iverheal3 },
  { id: 11, name: "Ivermectin 6 MG", imageName: iverheal6 },
  { id: 12, name: "Ivermectin 12 MG", imageName: iverheal12 },
  {
    id: 13,
    name: "kamagra oral jelly's 100 mg",
    imageName: kamagraoraljellys100mg,
  },
  { id: 14, name: "Levitra 20 MG", imageName: vilitra20 },
  { id: 15, name: "Levitra 40 MG", imageName: vilitra40 },
  { id: 16, name: "Levitra 60 MG", imageName: vilitra60 },
  { id: 17, name: "Soma 350 MG", imageName: painosoma350 },
  { id: 18, name: "Soma 500 MG", imageName: painosoma500 },
  {
    id: 19,
    name: "Sustanon 250 MG 1 ML Vials",
    imageName: testastroneblue,
  },
  {
    id: 20,
    name: "Testosterone Enanthate Depot 25 MG 1 ML",
    imageName: testastronered,
  },
  { id: 21, name: "Testosterone Gel 1%", imageName: TestosteroneGel1 },
  { id: 22, name: "Viagra 100 mg", imageName: cenforce100 },
  { id: 23, name: "Viagra 150 mg", imageName: cenforce150 },
  { id: 24, name: "Viagra 200 mg", imageName: cenforce200 },
  { id: 25, name: "Hairloss propecia Finasteride 1 mg", imageName: finest1 },
  { id: 26, name: "Antibiotics Doxycycline 100 mg", imageName: doxycycline },
  { id: 27, name: "Weightloss Xenical 120 mg", imageName: slimtop },
  {
    id: 28,
    name: "Insomnia/sleeping Zopiclone 3.75 to 20 mg",
    imageName: zopisign,
  },
  { id: 29, name: "ADHD  Strattera 10 to 40 mg", imageName: atomext },
  {
    id: 30,
    name: "Wakefulness Provigil Modafinil 100 to 250 MG",
    imageName: moonegil,
  },
  { id: 31, name: "Eyecare Lumigan 0.03% Bimatoprost", imageName: lumigun },
  { id: 32, name: "HGH SOMATROPIN 4IU", imageName: headen },
  { id: 33, name: "VIAGRA SILDIGRA 250 MG", imageName: sildigra },
  {
    id: 34,
    name: "ANAVAR 10 MG OXANDROLONE  TABLETS , FOR MUSCLE BUILDING",
    imageName: anavar,
  },
  { id: 35, name: "DANABOL 10 MG FOR MUSCLE BUILDING", imageName: danabol },
  { id: 36, name: "TRENBOLON 200 MG", imageName: trenbolon },
  { id: 37, name: "RYBELSUS SEMAGLUTIDE TABLETS", imageName: rvblesus },
  { id: 38, name: "OZEMPIC SEMAGLUTIDE INJECTIONS", imageName: fitaro },
];

export const numberValidation = (value) => {
  const regex = /^[0-9]*$/;
  return regex.test(value);
};
