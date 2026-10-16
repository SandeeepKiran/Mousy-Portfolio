/*
 * PROJECT LIST — the only file you need to edit to change the project cards.
 *
 * The page always shows the first 5 entries of PROJECTS as normal cards,
 * then the SPECIAL_CARD as the 6th card (dashed border with a "+" icon).
 *
 * Each project has these fields:
 *   title       – the bold name under the picture.
 *   description – one short line under the title.
 *   link        – where the card goes when clicked. Use "#" until you have a page.
 *   image       – path to a picture, e.g. "images/project-one.png".
 *                 Leave it as "" to show a coloured placeholder box instead.
 *   imageAlt    – a short description of the picture for screen readers.
 *                 Leave it "" only if the picture is purely decorative.
 *
 * Tip: keep pictures around 16:9 (for example 1280 × 720 px); the box crops
 * anything else to fit.
 *
 * This is a plain script (not a module) on purpose: modules do not load when
 * you open index.html by double-clicking it.
 */

window.PROJECTS = [
  {
    title: "Kitsune Labs",
    description: "QA tools in the browser: test generation, bug finding and reports. Try it live.",
    link: "https://sandeeepkiran.github.io/kitsune-labs/",
    image: "",
    imageAlt: "",
  },
  {
    title: "Windfall Gallery",
    description: "Android gallery that shows your photos in random order. Kotlin + Jetpack Compose.",
    link: "https://github.com/SandeeepKiran/Windfall-Random-Gallery/releases/latest",
    image: "",
    imageAlt: "",
  },
  {
    title: "My Personal UX for Amazon",
    description: "Browser extension that cleans up Amazon. Chrome, Edge and Firefox.",
    link: "https://github.com/SandeeepKiran/My-Personal-UX-for-Amazon/releases/latest",
    image: "",
    imageAlt: "",
  },
  {
    title: "Leyline Autofill",
    description: "AI autofill for job application forms. You review, it never submits.",
    link: "https://github.com/SandeeepKiran/Leyline-Autofill/releases/latest",
    image: "",
    imageAlt: "",
  },
  {
    title: "Sandstorm Secure",
    description: "Phone security and device management with Android Management API.",
    link: "https://github.com/SandeeepKiran/Sandstorm-Secure",
    image: "",
    imageAlt: "",
  },
];

/* The 6th card. It has no picture; it shows a big "+" instead.
   It invites visitors to get in touch about a new project. */
window.SPECIAL_CARD = {
  title: "Your next project",
  description: "Let's build or test something together",
  link: "mailto:sandeeepkiran@gmail.com",
};
