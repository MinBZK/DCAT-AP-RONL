// Plaats dit bestand op een centrale locatie voor hergebruik in meerdere documenten.
var organisationConfig = {
  nl_organisationName: "MinBZK",
  nl_organisationStylesURL:
    "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
  nl_organisationPublishURL: "https://regels.overheid.nl/publicaties/",
  logos: [
    {
      src: "https://gitdocumentatie.logius.nl/publicatie/respec/style/logos/figure-logius.svg",
      alt: "Logius",
      id: "Logius",
      height: 77,
      width: 44,
      url: "https://www.logius.nl/standaarden",
    },
  ],

  postProcess: [window.respecMermaid.createFigures],

  // Original config
  //    latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName"],
  //    thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "specStatus", "-", "specType", "-", "shortName", "-", "publishDate"],
  //    prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "previousMaturity", "-", "specType", "-", "shortName", "-", "previousPublishDate"],

  latestVersion: ["nl_organisationPublishURL", "shortName"],
  thisVersion: [
    "nl_organisationPublishURL",
    "shortName",
    "/v",
    "publishVersion",
  ],
  prevVersion: [
    "nl_organisationPublishURL",
    "shortName",
    "/v",
    "previousPublishVersion",
  ],
  useLogo: true,
  useLabel: true,

  license: "cc0",
  addSectionLinks: true,

  localizationStrings: {
    en: {
      wv: "Draft",
      cv: "Recommendation",
      vv: "Proposed recommendation",
      def: "Definitive version",
      basis: "Document",
      eo: "Outdated version",
      tg: "Rescinded version",
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Proposed recommendation",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice",
    },
    nl: {
      wv: "Werkversie",
      cv: "Consultatieversie",
      vv: "Versie ter vaststelling",
      def: "Vastgestelde versie",
      basis: "Document",
      eo: "Verouderde versie",
      tg: "Teruggetrokken versie",
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice",
    },
  },

  sotdText: {
    nl: {
      sotd: "Status van dit document",
      def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie.`,
      cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
      vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      basis: "Dit is een document zonder officiële status.",
    },
    en: {
      sotd: "Status of This Document",
      def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
      wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
      cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to `,
      vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
      basis: "This document has no official standing.",
    },
  },

  labelColor: {
    def: "#154273",
    wv: "#39870c",
  },

  licenses: {
    cc0: {
      name: "Creative Commons 0 Public Domain Dedication",
      short: "CC0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      image:
        "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-zero.svg",
    },
    "cc-by": {
      name: "Creative Commons Attribution 4.0 International Public License",
      short: "CC-BY",
      url: "https://creativecommons.org/licenses/by/4.0/legalcode",
      image:
        "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by.svg",
    },
    "cc-by-nd": {
      name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
      image:
        "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by-nd.svg",
    },
  },

  localBiblio: {
    SemVer: {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013",
    },
    "DCAT-AP-3.0": {
      href: "https://semiceu.github.io//DCAT-AP/releases/3.0.0/",
      title: "DCAT-AP-3.0",
      authors: ["Bert Van Nuffelen"],
      date: "2024-02-12",
    },
    "DCAT-AP-NL-3.0": {
      href: "https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/",
      title: "DCAT-AP-NL-3.0",
      authors: ["Jan Skornsek, Ine de Visser"],
      date: "2024-04-16",
    },
    "DCAT-AP-DONL-2.0": {
      href: "https://dataoverheid.github.io/dcat-ap-donl/",
      title: "DCAT-AP-DONL-2.0",
      authors: ["Jan Meijer; Huub van Oers; Kees Trautwein. data.overheid.nl."],
      date: "2022-11-24",
    },
    "DCAT-AP-DONL-1.1": {
      href: "https://dcat-ap-donl.readthedocs.io/en/latest/",
      title: "DCAT-AP-DONL-1.1",
      authors: [
        "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties.",
      ],
      date: "2022-11-24",
    },
    DONL: {
      href: "https://data.overheid.nl",
      title: "data.overheid.nl",
      authors: [
        "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties.",
      ],
      date: "",
    },
    RONL: {
      href: "https://regels.overheid.nl",
      title: "regels.overheid.nl",
      authors: ["ministerie van Binnenlandse Zaken en Koninkrijksrelaties."],
      date: "",
    },
    LM: {
      href: "https://regels.overheid.nl/publicaties/legitimaat",
      title: "De LegitiMaat",
      authors: ["ministerie van Binnenlandse Zaken en Koninkrijksrelaties."],
      date: "Juli 2022",
    },
    "CPSV-AP": {
      href: "https://semiceu.github.io/CPSV-AP/releases/3.2.0/",
      title: "Core Public Service Vocabulary Application Profile (CPSV-AP)",
      authors: ["Core Public Service Vocabulary Working Group."],
      date: "2024-05-06",
    },
    UPL: {
      href: "https://standaarden.overheid.nl/upl",
      title: "Uniforme Productnamenlijst",
      authors: ["Logius."],
      date: "",
    },
    "Volledige-UPL": {
      href: "https://standaarden.overheid.nl/owms/oquery/UPL-actueel.plain",
      title: "Volledige UPL Actueel",
      authors: ["Logius."],
      date: "",
    },
    SC: {
      href: "https://www.logius.nl/domeinen/interactie/samenwerkende-catalogi/wat-is-het",
      title: "Samenwerkende Catalogi (SC)",
      authors: ["Logius."],
      date: "",
    },
    SDG: {
      href: "https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/europa/single-digitale-gateway/",
      title: "Single Digital Gateway (SDG)",
      authors: ["Europees Parlement."],
      date: "2 oktober 2018",
    },
    PUC: {
      href: "https://puc.overheid.nl/",
      title: "Publicatieplatform UitvoeringsContent (PUC)",
      authors: ["Logius."],
      date: "",
    },
    DATA_EU: {
      href: "https://data.europa.eu/en",
      title: "data.europa.eu",
      authors: ["The Publications Office of the European Union."],
      date: "",
    },
    DCATAP_21: {
      href: "https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210",
      title: "DCAT-AP 2.1",
      authors: ["The Publications Office of the European Union."],
      date: "",
    },
    DCAT_20: {
      href: "https://www.w3.org/TR/vocab-dcat-2/",
      title: "Data Catalog Vocabulary (DCAT) - Version 2",
      authors: ["World Wide Web Consortium"],
      date: "February 2020",
    },
    OWMS_TAXONOMIEBELEIDSAGENDA: {
      title: "overheid:TaxonomieBeleidsagenda (standaarden.overheid.nl)",
      href: "https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.taxonomiebeleidsagenda",
      publisher:
        "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
    },
    OWMS_ORGANISATIE: {
      title: "overheid:Organisatie (standaarden.overheid.nl)",
      href: "https://standaarden.overheid.nl/owms/terms/Organisatie",
      publisher:
        "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
    },
    OWMS_40: {
      title: "OWMS 4.0",
      href: "https://standaarden.overheid.nl/owms/terms",
      publisher:
        "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
    },
    OWMS_UPL: {
      title: "overheid:UPL (standaarden.overheid.nl)",
      href: "https://standaarden.overheid.nl/owms/terms/UniformeProductnaam.html",
      publisher:
        "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties",
    },
    HTTPS_EN_HSTS: {
      title: "HTTPS en HSTS",
      href: "https://www.forumstandaardisatie.nl/open-standaarden/https-en-hsts",
      publisher: "Forum Standaardisatie",
    },
    IANA_MEDIATYPES: {
      title: "IANA Mediatypes",
      href: "https://www.iana.org/assignments/media-types/media-types.xhtml",
      publisher: "Internet Assigned Numbers Authority",
    },
    MDR_FILETYPE: {
      title: "mdr:Filetype (publications.europa.eu)",
      href: "https://publications.europa.eu/resource/authority/file-type",
      publisher: "The Publications Office of the European Union",
    },
  },
};
