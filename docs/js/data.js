/* ===========================================================
   SITE DATA — edit everything here. Links, icons, experience and
   project pages all come from this file; no other file needs to change.
   Drop images into /assets and point to them below.
   =========================================================== */
const lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit occaecat deleniti ut est officia soluta amet nisi nobis autem dolore est anim quibusdam qui quos minus esse laborum eos dignissimos est soluta sunt at est accusamus libero sint quos incididunt dolores pariatur dolor commodo cupiditate in dolorem quas sit illum repellendus";

/* Project page body. Each section = one numbered stop in the side rail.
   content: a string = text box, {img:"path", alt:"..."} = image. Add / remove / reorder freely. */
const demoSections = [
  { heading: "Heading #1", content: [lorem] },
  { label: "01 - Context", heading: "Heading #2", content: [lorem] },
  { label: "02 - Problem", heading: "Heading #3", content: [lorem, { img: "assets/project-image.jpg" }] },
  { label: "03 - Process", heading: "Heading #4", content: [lorem] },
  { label: "04 - Outcome", heading: "Heading #5", content: [lorem, { img: "assets/project-image.jpg" }] }
];
/* The tan info box at the top of each project. Add or remove [label, text] pairs. */
const demoInfo = [["Role", "lorem ipsum dolor sit amet"], ["Timeline", "lorem ipsum dolor sit amet"], ["Tools", "lorem ipsum dolor sit amet"], ["Team", "lorem ipsum dolor sit amet"]];

const SITE = {
  name: "Rashe M.", fullName: "Rashe Mishra", year: 2026,
  tagline: "Digital Designer + Developer. Digital Media, Arts, & Technology + and Data Visualization @ Penn State",
  email: "rashemishrarm@gmail.com",
  avatar: "assets/avatar.jpg",

  /* Sidebar links (label: url) */
  links: { LinkedIn: "https://linkedin.com/in/YOUR-HANDLE", GitHub: "https://github.com/YOUR-HANDLE", Resume: "assets/resume.pdf" },

  /* Footer icons — any Bootstrap Icons class: https://icons.getbootstrap.com */
  socials: [
    { icon: "bi-linkedin", url: "https://linkedin.com/in/YOUR-HANDLE", label: "LinkedIn" },
    { icon: "bi-github", url: "https://github.com/YOUR-HANDLE", label: "GitHub" },
    { icon: "bi-file-earmark-person", url: "assets/resume.pdf", label: "Resume" }
  ],

  /* Top nav. ORDER here = "Next page" order in the footer. */
  nav: [
    { key: "home", label: "home", href: "index.html#home" },
    { key: "work", label: "work", href: "index.html#work" },
    { key: "about", label: "about", href: "about.html" },
    { key: "construction", label: "under construction", href: "construction.html" }
  ],

  /* [title, subtitle, right-hand text] — used on About + Recruiter pages */
  experience: [
    ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
    ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
    ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"],
    ["lorem ipsum dolor", "lorem ipsum dolor", "lorem ipsum dolor"]
  ],

  /* One entry = one card on Work, one row on Recruiter, one project page (project.html?p=slug) */
  projects: [
    { slug: "project-one", title: "lorem ipsum dolor", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-1.jpg", info: demoInfo, sections: demoSections },
    { slug: "project-two", title: "lorem ipsum dolor", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-2.jpg", info: demoInfo, sections: demoSections },
    { slug: "project-three", title: "lorem ipsum dolor", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-3.jpg", info: demoInfo, sections: demoSections },
    { slug: "project-four", title: "lorem ipsum dolor", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-4.jpg", info: demoInfo, sections: demoSections }
  ]
};
