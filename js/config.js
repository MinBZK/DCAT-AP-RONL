let respecConfig = {
  // Config parameters
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "ronl",

  // shortName = Repository name
  shortName: "dcat-ap-ronl",
  publishDate: "2023-12-02",
  publishVersion: "0.1.0",

  previousPublishVersion: "",
  previousPublishDate: "",
  previousMaturity: "WV",
  title: "DCAT AP RONL (concept)",
  subtitle:
    "Het applicatie profiel van de Europese DCAT-AP standaard voor uitwisseling met regels.overheid.nl",

  // Content
  content: { ch01: "informative", ch02: "", ch03: "", ch04: "", ch05: "" },
  editors: [
    {
      name: "Mildo van Staden",
      mailto: "Mildo.Staden@minbzk.nl",
      company: "BZK",
      companyURL:
        "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
    },
  ],
  authors: [
    {
      name: "Hayo Schreijer",
      url: "https://www.dexes.nl",
    },
    {
      name: "Steven Gort",
      url: "https://www.ictu.nl",
    },
  ],
  github: "https://github.com/MinBZK/dcat-ap-ronl/",

  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
      label: "pdf",
      uri: "DCAT-AP-RONL.pdf",
    },
  ],
};