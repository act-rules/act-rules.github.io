(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/1x4":function(e){e.exports=JSON.parse('{"4c31df":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"aaa1bf":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"2eb176":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"afb423":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"047fe0":[{"name":"Bypass Blocks of Repeated Content","slug":"rules/cf77f2"}],"b40fd1":[{"name":"Bypass Blocks of Repeated Content","slug":"rules/cf77f2"}],"3e12e1":[{"name":"Bypass Blocks of Repeated Content","slug":"rules/cf77f2"}],"ye5d6e":[{"name":"Bypass Blocks of Repeated Content","slug":"rules/cf77f2"}],"a1b64e":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ebe86a":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ab4d13":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"},{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"f51b46":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"}],"1ea59c":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"1a02b0":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"}],"fd26cf":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ee13b5":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"d7ba54":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}]}')},"6vEM":function(e,a,t){},Yh6b:function(e,a,t){},"e+bk":function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),l=t.n(i),n=t("Wbzz"),c=t("M55E"),r=t.n(c),s=t("sWYD"),o=t("vrFN"),m=t("Bl7J"),d=t("ua6q"),u=function(e){var a=e.scrollLinkId,t=e.items,i=e.contributors,n=Object(d.getAcknowledgements)(t,i);return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:a,href:"#"+a},l.a.createElement("h2",null,"Acknowledgments")),n.map((function(e){var a=e.title,t=e.items;return t&&t.length?l.a.createElement("div",{className:"meta",key:a},l.a.createElement("h3",{className:"heading"},a),l.a.createElement("ul",null,t.map((function(e){var a=e.text,t=e.url;return l.a.createElement(b,{url:t,text:a,key:a})})))):null})))};function b(e){var a=e.text,t=e.url;return t?l.a.createElement("li",null,l.a.createElement("a",{className:"sc-item block",target:"_blank",rel:"noopener noreferrer",href:t},a)):l.a.createElement("li",null,a)}u.defaultProps={scrollLinkId:"",items:{authors:[],previous_authors:[],reviewers:[]},contributors:[]};var p=u,f=t("t1PT"),h=function(e){var a=e.ruleId,t=e.glossaryData,i=f[a];i.includes("#outcome")||i.push("#outcome");var n=t.edges.filter((function(e){var a=e.node.frontmatter;return i.includes("#"+a.key)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},l.a.createElement("h2",null,"Glossary")),n.map((function(e){var a=e.node,t=a.frontmatter,i=a.html;return l.a.createElement("article",{key:a.id},l.a.createElement("a",{id:t.key,href:"#"+t.key},l.a.createElement("h3",null,t.title)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))})))},g=t("3OQw"),v=t("rbzX"),y=t("TSYQ"),k=t.n(y),E=t("lU33"),w=(t("6vEM"),function(e){var a=e.toc,t=Object(i.useState)(!0),n=t[0],c=t[1];return l.a.createElement("section",{className:k()("tableOfContents",{hide:!n})},l.a.createElement(E.a,{queries:{large:"(min-width: 1200px)"},onChange:function(e){return c(e.large)}}),l.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Table of Contents"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#glossary-listing"},"Glossary")),l.a.createElement("li",null,l.a.createElement("a",{href:"#useful-links"},"Useful Links")),l.a.createElement("li",null,l.a.createElement("a",{href:"#implementation-metrics"},"Implementations")),l.a.createElement("li",null,l.a.createElement("a",{href:"#acknowledgments"},"Acknowledgments"))))}),x=t("hmaj"),_=t("/1x4"),N=t("IQve"),T=t.n(N),I=t("rlp3");t("Yh6b"),a.default=function(e){var a=e.location,t=e.data,i=t.rule,c=t.allRules,d=t.allGlossary,u=t.site,b=i.html,f=i.frontmatter,y=i.tableOfContents,k=i.fields,E=k.fastmatterAttributes,N=k.changelog,j=k.fileName.relativePath,C=JSON.parse(N),q=JSON.parse(E),S=new r.a.Converter,M=JSON.parse(u.siteMetadata.actRulesPackage),L=M.repository,H=M.config,O=M.contributors,R=T()(L.url),B=f.id,z="/testcases/"+B+"/rule-"+B+"-testcases-for-em-report-tool.json",A=R+"/edit/develop/_rules/"+j,J="/rules/"+B+"/changelog",P=R+"/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+"+B+"+",U=H["rule-format-metadata"]["input-aspects"],D=_[B],F=I.filter((function(e){return e.actMapping.filter((function(e){var a=e.ruleId,t=e.consistency;return a===B&&["consistent","partially-consistent"].includes(t)})).length>0}));return l.a.createElement(m.a,{location:a},l.a.createElement(o.a,{title:"Rule | "+f.name}),l.a.createElement("section",{className:"page-rule"},l.a.createElement("header",null,l.a.createElement("h1",{dangerouslySetInnerHTML:{__html:S.makeHtml(f.name)}})),l.a.createElement("ul",{className:"meta"},f.rule_type&&l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Type:"),l.a.createElement("span",null,f.rule_type)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Id:"),l.a.createElement("span",null," ",B)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Last modified:"),l.a.createElement("span",null," ",C&&C.length?Object(s.a)(new Date(C[0].date),"MMM dd, yyyy"):"-")),l.a.createElement("li",null,l.a.createElement(g.a,{accessibility_requirements:q.accessibility_requirements})),D&&D.length>0&&l.a.createElement("li",null,l.a.createElement(x.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Used in rules:")},itemTemplate:function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement(n.Link,{to:"/"+e.slug},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:S.makeHtml(e.name)}})))},items:D})),f.input_aspects&&f.input_aspects.length&&l.a.createElement("li",null,l.a.createElement(x.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Aspects:")},itemTemplate:function(e){var a=U[e]?U[e]:U.default;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:a},e))},items:f.input_aspects})),f.input_rules&&f.input_rules.length&&l.a.createElement("li",null,l.a.createElement(x.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Rules:")},itemTemplate:function(e){var a=c.edges.find((function(a){return a.node.frontmatter.id===e})),t=a.node.fields.slug.replace("rules/",""),i=a.node.frontmatter.name;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:t,dangerouslySetInnerHTML:{__html:S.makeHtml(i)}}))},items:f.input_rules}))),l.a.createElement("hr",null),l.a.createElement("h2",{id:"description"},l.a.createElement("a",{href:"#description","aria-label":"description permalink",className:"anchor before"},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",viewBox:"0 0 16 16",width:"16"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.makeHtml(f.description)}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:b}}),l.a.createElement("hr",null),l.a.createElement(h,{ruleId:B,glossaryData:d}),l.a.createElement("hr",null),l.a.createElement("a",{href:"#useful-links",id:"useful-links"},l.a.createElement("h2",null,"Useful Links")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:P},"Github issues related to this rule")),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:J},"Changelog")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:A},"Propose a change to the rule")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:z},"Test case file for use in the WCAG-EM Report Tool"))),l.a.createElement("hr",null),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"implementation-metrics",href:"#implementation-metrics"},l.a.createElement("h2",null,"Implementations")),l.a.createElement("p",null,"This section is not part of the official rule. It is populated dynamically and not accounted for in the change history or the last modified date. This section will not be included in the rule when it is published on the W3C website."),l.a.createElement(v.a,{implementers:F,ruleId:B})),l.a.createElement(p,{scrollLinkId:"acknowledgments",items:q.acknowledgments||q.acknowledgements,contributors:O})),l.a.createElement(w,{toc:y}))}},hmaj:function(e,a,t){"use strict";var i=t("q1tI"),l=t.n(i),n=function(e){var a=e.cls,t=e.headingTemplate,i=e.itemTemplate,n=e.items,c=void 0===n?[]:n;return l.a.createElement("div",{className:a},t(),(!c||!c.length)&&l.a.createElement("div",{className:"note"},"No Data"),c.length>0&&l.a.createElement("ul",null,c.map((function(e){return i(e)}))))};n.defaultProps={cls:"",heading:"",items:[]},a.a=n},t1PT:function(e){e.exports=JSON.parse('{"5f99a7":["#wai-aria-specifications"],"6cfa84":["#attribute-value","#focusable","#visible"],"ff89c9":["#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"bc4a75":["#attribute-value","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#owned-by","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"5c01ea":["#attribute-value","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"6a7281":["#namespaced-element","#wai-aria-specifications"],"e6952f":[],"afb423":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#programmatically-hidden","#visible"],"80f0bf":["#attribute-value","#instrument-to-achieve-an-objective","#outcome","#web-page-html"],"e7aa44":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#outcome","#programmatically-hidden","#visible"],"2eb176":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#programmatically-hidden","#visible"],"aaa1bf":["#attribute-value"],"4c31df":["#accessible-name","#attribute-value","#focusable","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#programmatically-hidden","#visible","#web-page-html","#whitespace"],"efbfc7":["#clearly-labeled-location","#instrument-to-achieve-an-objective","#namespaced-element","#semantic-role","#user-interaction","#visible","#visible-text-content","#web-page-html"],"73f2c2":["#appropriate-field-for-the-form-control","#attribute-value","#correct-autocomplete-field","#disabled-element","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#visible"],"3e12e1":["#block-of-content","#block-of-repeated-content","#equivalent-resource","#focusable","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#non-repeated-content","#perceivable-content","#programmatically-hidden","#visible","#web-page-html"],"97a4e1":["#accessible-name","#attribute-value","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"cf77f2":["#block-of-content","#block-of-repeated-content","#equivalent-resource","#focusable","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#just-before","#non-repeated-content","#perceivable-content","#programmatically-hidden","#semantic-role","#visible","#web-page-html"],"b33eff":["#namespaced-element","#visible"],"c249d5":["#blocked-event","#changes-in-content","#clearly-labeled-location","#instrument-to-achieve-an-objective","#set-of-clearly-labeled-instruments","#web-page-html"],"7677a9":["#changes-in-content","#clearly-labeled-location","#instrument-to-achieve-an-objective","#semantic-role","#web-page-html"],"047fe0":["#block-of-content","#block-of-repeated-content","#equivalent-resource","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#marked-as-decorative","#non-repeated-content","#perceivable-content","#programmatically-hidden","#semantic-role","#visible","#web-page-html"],"ye5d6e":["#block-of-content","#block-of-repeated-content","#equivalent-resource","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#just-before","#non-repeated-content","#perceivable-content","#semantic-role","#visible","#web-page-html"],"b40fd1":["#block-of-content","#block-of-repeated-content","#equivalent-resource","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#instrument-to-achieve-an-objective","#marked-as-decorative","#non-repeated-content","#perceivable-content","#programmatically-hidden","#semantic-role","#visible","#web-page-html"],"off6ek":["#accessible-name","#attribute-value","#focusable","#included-in-the-accessibility-tree","#known-primary-language-tag","#most-common-element-language","#namespaced-element","#programmatically-hidden","#text-inheriting-language","#visible"],"de46e4":["#accessible-name","#attribute-value","#focusable","#included-in-the-accessibility-tree","#known-primary-language-tag","#namespaced-element","#programmatically-hidden","#text-inheriting-language","#visible","#whitespace"],"46ca7f":["#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-hidden","#semantic-role"],"7d6734":["#accessible-name","#explicit-role","#focusable","#included-in-the-accessibility-tree","#namespaced-element","#programmatically-hidden","#wai-aria-specifications"],"80af7b":["#focusable","#namespaced-element","#outcome"],"ebe86a":["#focusable","#included-in-the-accessibility-tree","#namespaced-element","#programmatically-hidden","#standard-keyboard-navigation","#visible"],"a1b64e":["#focusable","#namespaced-element","#standard-keyboard-navigation"],"cc0f0a":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatic-label","#programmatically-hidden","#semantic-role","#visible","#visual-context","#wai-aria-specifications"],"e086e5":["#accessible-name","#attribute-value","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatic-label","#programmatically-hidden","#semantic-role","#visible","#wai-aria-specifications"],"b49b2e":["#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-hidden","#semantic-role","#visible"],"ffd0e9":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#visible","#wai-aria-specifications"],"b5c3f8":["#attribute-value"],"ucwvc8":["#attribute-value","#default-page-language","#known-primary-language-tag","#most-common-element-language","#web-page-html"],"bf051a":["#known-primary-language-tag"],"5b7ae0":["#known-primary-language-tag"],"2779a5":["#namespaced-element","#whitespace"],"c4a8a4":["#namespaced-element","#whitespace"],"3ea0c8":["#focusable","#included-in-the-accessibility-tree","#namespaced-element","#programmatic-label","#programmatically-hidden","#visible"],"4b1c6c":["#accessible-name","#equivalent-resource","#focusable","#included-in-the-accessibility-tree","#matching-characters","#programmatically-hidden","#same-resource","#web-page-html"],"cae760":["#accessible-name","#explicit-role","#focusable","#included-in-the-accessibility-tree","#programmatically-hidden","#wai-aria-specifications","#whitespace"],"akn7bn":["#attribute-value","#visible"],"qt1vmo":["#accessible-name","#focusable","#included-in-the-accessibility-tree","#programmatically-hidden","#visible"],"59796f":["#accessibility-support","#accessible-name","#attribute-value","#focusable","#included-in-the-accessibility-tree","#programmatically-hidden",null],"9eb3f6":["#accessible-name","#explicit-role","#filename","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#whitespace"],"0va7u6":["#attribute-value","#embedded-image","#rendered-image-resource","#visible","#web-page-html"],"23a2a8":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"e88epe":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-hidden","#semantic-role","#visible","#wai-aria-specifications"],"36b590":["#accessible-name","#explicit-role","#focusable","#form-field-error-indicator","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#visible"],"24afc2":["#namespaced-element","#visible"],"78fd32":["#namespaced-element","#visible"],"aizyf1":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#marked-as-decorative","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"5effbb":["#accessible-name","#expectation","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#marked-as-decorative","#programmatically-determined-link-context","#programmatically-hidden","#semantic-role",null],"c487ae":["#accessible-name","#attribute-value","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"b20e66":["#accessible-name","#equivalent-resource","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#marked-as-decorative","#matching-characters","#namespaced-element","#programmatically-hidden","#same-resource","#semantic-role","#wai-aria-specifications","#web-page-html"],"fd3a94":["#accessible-name","#equivalent-resource","#expectation","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#marked-as-decorative","#matching-characters","#namespaced-element","#programmatically-determined-link-context","#programmatically-hidden","#same-resource","#semantic-role","#wai-aria-specifications","#web-page-html",null],"m6b1q3":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role"],"bc659a":["#attribute-value","#expectation",null],"bisz58":["#attribute-value"],"b4f0c3":["#visible"],"9bd38c":["#accessible-name","#focusable","#included-in-the-accessibility-tree","#programmatically-hidden","#visible","#visible-text-content","#visual-reference-words"],"8fc3b6":["#accessible-name","#explicit-role","#focusable","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-hidden"],"307n5z":["#accessible-name","#attribute-value","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role"],"ffbc54":["#blocked-event","#changes-in-content","#clearly-labeled-location","#inheriting-semantic","#instrument-to-achieve-an-objective","#printable-characters","#same-key-events","#semantic-role","#set-of-clearly-labeled-instruments","#web-page-html"],"674b10":["#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#wai-aria-specifications","#whitespace"],"4e8ab6":["#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#wai-aria-specifications"],"0ssw9k":["#attribute-value","#namespaced-element","#scrollable-element","#visible"],"oj04fd":["#focusable","#focused"],"d0f69e":["#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#visible","#wai-aria-specifications"],"a25f45":["#attribute-value","#focusable","#included-in-the-accessibility-tree","#programmatically-hidden","#visible"],"afw4f7":["#accessible-name","#attribute-value","#background-colors-of-text","#bounding-box-around-text","#disabled-element","#expectation","#explicit-role","#focusable","#foreground-colors-of-text","#highest-possible-contrast","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#large-scale-text","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#visible",null],"09o5cg":["#accessible-name","#attribute-value","#background-colors-of-text","#bounding-box-around-text","#disabled-element","#explicit-role","#focusable","#foreground-colors-of-text","#highest-possible-contrast","#implicit-role","#included-in-the-accessibility-tree","#inheriting-semantic","#large-scale-text","#marked-as-decorative","#namespaced-element","#programmatically-hidden","#semantic-role","#visible"],"eac66b":["#non-streaming-media-element","#outcome","#visible"],"c5a4ea":["#expectation","#non-streaming-media-element","#outcome","#visible",null],"ab4d13":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#programmatically-hidden","#visible"],"1ea59c":["#non-streaming-media-element","#visible"],"f51b46":["#audio-output","#non-streaming-media-element","#visible"],"f196ce":["#attribute-value","#non-streaming-media-element","#visible"],"c3232f":["#non-streaming-media-element","#outcome","#visible"],"fd26cf":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#programmatically-hidden","#visible"],"d7ba54":["#non-streaming-media-element","#visible"],"ac7dc6":["#attribute-value","#non-streaming-media-element","#visible"],"ee13b5":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#programmatically-hidden","#visible"],"1ec09b":["#non-streaming-media-element","#outcome","#visible"],"1a02b0":["#non-streaming-media-element","#visible"],"2ee8b8":["#accessible-name","#explicit-role","#focusable","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-hidden","#semantic-role","#visible","#visible-text-content","#whitespace"],"9e45ec":["#namespaced-element","#visible"],"59br37":["#attribute-value","#clipped-by-overflow","#namespaced-element","#viewport-size","#visible"]}')},ua6q:function(e,a){function t(e,a){var t=e[0],i=a[0],l=["funding","reviewers","previous_authors","authors"],n=l.indexOf(t),c=l.indexOf(i);return-1!==n||-1!==c?c-n:t.toUpperCase()>i.toUpperCase()?1:-1}e.exports={getAcknowledgements:function(e,a){return Object.entries(e).sort(t).map((function(e){return function(e,a,t){return a=a.map((function(e){return function(e,a){var t=a.find((function(a){var t=a.name;return e.toLowerCase()===t.toLowerCase()}));if(!t)return{text:e};return{text:t.name,url:t.url}}(e,t)})),{title:e=function(e){return e.split(/_/g).map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")}(e),items:a}}(e[0],e[1],a)}))}}}}]);
//# sourceMappingURL=component---src-templates-rule-js-aa565572d61ef9f687bb.js.map