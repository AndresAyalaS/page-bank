import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

export const footerData = [
  {
    id: 1,
    title: "Links útiles",
    links: [
      {
        id: 1,
        name: "Contenido",
        link: "#",
      },
      {
        id: 2,
        name: "Como trabajamos",
        link: "#",
      },
      {
        id: 3,
        name: "Crear",
        link: "#",
      },
      {
        id: 4,
        name: "Explorar",
        link: "#",
      },
      {
        id: 5,
        name: "Términos y condiciones",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Comunidad",
    links: [
      {
        id: 1,
        name: "Centro de ayuda",
        link: "#",
      },
      {
        id: 2,
        name: "Partners",
        link: "#",
      },
      {
        id: 3,
        name: "Sugerencias",
        link: "#",
      },
      {
        id: 4,
        name: "Blog",
        link: "#",
      },
      {
        id: 5,
        name: "Newsletter",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Partner",
    links: [
      {
        id: 1,
        name: "Nuestro partner",
        link: "#",
      },
      {
        id: 2,
        name: "Hazte partner",
        link: "#",
      },
    ],
  },
];

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: <RiFacebookCircleFill />,
    link: "https://www.facebook.com/"
  },
  {
    id: 3,
    icon: <RiTwitterXFill />,
    link: "https://www.twitter.com/"
  },
  {
    id: 4,
    icon: <RiLinkedinBoxFill />,
    link: "https://www.linkedin.com/"
  },
];
