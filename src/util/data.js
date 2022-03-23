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
];

export const numberValidation = (value) => {
  const regex = /^[0-9]*$/;
  return regex.test(value);
};
