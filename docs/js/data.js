/* ===========================================================
   SITE DATA — edit everything here. Links, icons, experience and
   project pages all come from this file; no other file needs to change.
   Drop images into /assets and point to them below.
   =========================================================== */
const lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit occaecat deleniti ut est officia soluta amet nisi nobis autem dolore est anim quibusdam qui quos minus esse laborum eos dignissimos est soluta sunt at est accusamus libero sint quos incididunt dolores pariatur dolor commodo cupiditate in dolorem quas sit illum repellendus";

/* project page body. Each section = one numbered stop in the side rail.
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
  avatar: "assets/avatar.png",

  /* sidebar links */
  links: { LinkedIn: "https://www.linkedin.com/in/raashee-mishra/", GitHub: "https://github.com/rashemish", Resume: "assets/Raashee_Mishra_Resume.pdf" },

  /* footer icons — any Bootstrap Icons class: https://icons.getbootstrap.com */
  socials: [
    { icon: "bi-linkedin", url: "https://www.linkedin.com/in/raashee-mishra/", label: "LinkedIn" },
    { icon: "bi-github", url: "https://github.com/rashemish", label: "GitHub" },
    { icon: "bi-file-earmark-person", url: "assets/Raashee_Mishra_Resume.pdf", label: "Resume" }
  ],

  /* Top nav. ORDER here = "Next page" order in the footer. */
  nav: [
    { key: "home", label: "home", href: "index.html#home" },
    { key: "work", label: "work", href: "index.html#work" },
    { key: "about", label: "about", href: "about.html" },
    { key: "construction", label: "under construction", href: "construction.html" }
  ],

  /* [title, subtitle, right-hand text] — used on About + Recruiter pages */
    tables: {
        aboutExperience: [
            ["Valley Magazine (Penn State)", "Graphic Designer", "Sept 2026 - Dec 2026"],
            ["South Asian Student Organization (Penn State)", "Digital Content Director", "Sept 2025 - May 2026"],
            ["The Rider News (Rider University)", "Graphic Designer", "Sept 2022 - May 2024"]
        ],
        aboutEducation: [
            ["Penn State", "Digital Media, Arts, & Technology", "2022 - 2026"]
        ],
        recruiterExperience: [
            ["Lake Erie Ballet Company", "Web Developer", "Jan 2026 - May 2026"],
            ["Ohai.ai", "Product Designer", "Jun 2025 - August 2025"],
            ["JRH Foundation", "Graphic Designer + Social Media Marketing", "Jan 2023 - May 2023"]
        ]
    },

  /* One entry = one card on Work, one row on Recruiter, one project page (project.html?p=slug) */
  projects: [
    { slug: "project-one", title: "OHAI CASE STUDY", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-1.jpg", info: demoInfo, sections: demoSections },
    { slug: "project-two", title: "LAKE ERIE BALLET WEBSITE REDESIGN", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-2.jpg", info: demoInfo, sections: demoSections },
    { slug: "project-three", title: "FASHION B2B SAAS", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-3.jpg", info: demoInfo, sections: demoSections },
    { slug: "project-four", title: "SPOTIFY: EARLY RISERS", sub: "lorem ipsum dolor", meta: "lorem ipsum dolor", thumb: "assets/project-4.jpg", info: demoInfo, sections: demoSections }
  ]
};
