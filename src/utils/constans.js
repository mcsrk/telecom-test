import {
  LinkedinFilled,
  WhatsAppOutlined,
  GithubOutlined,
} from "@ant-design/icons";

///////////////////////////////////////////
//               FOOTER                  //
///////////////////////////////////////////

export const mediaInfo = [
  {
    link: "https://www.linkedin.com/in/jhon-fredy-acosta-murillo-48595314b",
    icon: <LinkedinFilled />,
  },
  {
    link: "https://github.com/mcsrk",
    icon: <GithubOutlined />,
  },
];

export const companyList = {
  title: "Compañía",
  children: [
    {
      link: "https://www.marvel.com/",
      label: "Acerca de",
    },
    {
      link: "https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]",
      label: "Empleos",
    },
  ],
};

export const communityList = {
  title: "Síguenos",
  children: [
    {
      label: "Facebook",
      link: "http://facebook.com/marvel",
    },
    {
      label: "Twitter",
      link: "http://twitter.com/marvel",
    },
    {
      label: "YouTube",
      link: "http://youtube.com/marvel",
    },
    {
      label: "Instagram",
      link: "http://instagram.com/marvel",
    },
  ],
};

export const helpList = {
  title: "Enlaces útiles",
  children: [
    {
      label: "Ayuda",
      link: "https://www.marvel.com/corporate/about",
    },
  ],
};

export const contactList = {
  title: "Contáctanos",
  children: [
    {
      label: "ayuda@marvel.com",
      link: "mailto:ayuda@marvel.com/",
    },
    {
      label: "WhatsApp",
      link: "https://whatsapp.com/",
      icon: <WhatsAppOutlined />,
    },
  ],
};

///////////////////////////////////////////
//               CONTENT                 //
///////////////////////////////////////////

export const filterTypeButtons = [
  { label: "Personajes", value: "characters" },
  { label: "Comics", value: "comics" },
];
