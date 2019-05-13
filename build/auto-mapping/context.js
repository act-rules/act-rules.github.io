module.exports = {
  "@vocab": "http://www.w3.org/ns/earl#",
  "earl": "http://www.w3.org/ns/earl#",
  "WCAG20": "http://www.w3.org/TR/WCAG20/#",
  "WCAG21": "http://www.w3.org/TR/WCAG21/#",
  "auto-wcag": "https://auto-wcag.github.io/auto-wcag/rules/",
  "dct": "http://purl.org/dc/terms/",
  "sch": "https://schema.org/",
  "source": "dct:source",
  "title": "dct:title",
  // Bug in the WCAG-EM Report Tool, this should have maped to earl:test
  "EMTest": "http://www.w3.org/TR/WCAG-EM/#testcase",
  "assertedBy": { "@type": "@id" },
  "outcome": { "@type": "@id" },
  "mode": { "@type": "@id" }
}
