export const MAXIMUM_IMAGE_SIZE = 2 * 1024 * 1024; //less than 2MB in bytes

export const NOTIFICATION_MESSAGES = {
  'contact-form-success': "Thanks for your message, we'll get back to you soon!",
}

export const LANGUAGE_OPTIONS = [
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
];

export const CATEGORY_OPTIONS = [
  { label: "Article", value: "article" },
  { label: "Podcast", value: "podcast" },
  { label: "Video", value: "video" },
  { label: "Uncategorized", value: "uncategorized" },
];

export const DEFAULT_LANGUAGE = "en"

export const PAGE_TEMPLATES = [
  { label: "Article", value: "article.js" },
  { label: "Event", value: "event.js" },
];

export const PERMANENT_PAGES = [
  "home"
]

export const CONTENT_MAP = {
  header: { type: "header", content: { text: "Header" } },
  subHeading: { type: "subHeading", content: { text: "Sub-heading" } },
  paragraph: { type: "paragraph", content: { text: "Paragraph" } },
  image: { type: "image" },
  imageCarousel: { type: "imageCarousel", content: {} },
  readings: { type: "readings", content: {} },
  embeddedIframe: { type: "embeddedIframe", content: { src: "https://www.youtube.com/embed/Hu2iid0p73I", title: "Youtube video player" } },
  timeline: { type: "timeline", content: { alignment: "left" } },
  button: { type: "button", content: { anchor: "Button", link: "/" } },
  link: { type: "link", content: { anchor: "Link text", link: "/" } },
  expandableText: { type: "expandableText", content: { header: "Name", description: "<p>Bio</p>" } },
  videos: { type: "videos", content: { playlistId: { text: ""} }},
  quote: { type: "quote", content: { text: "Quote text" }}
}

export const SECTION_MAP = {
  default: { content: [] },
  highlight: {
    type: "highlight",
    content: [
      { type: "header", content: { text: "Header text" }},
      { type: "paragraph", content: { text: "<p>Section text</p>" }},
    ]
  },
  read: {
    type: "read",
    content: [
      { type: "subHeading", content: { text: "Read" }},
      { type: "paragraph", content: { text: "<p>Section introduction</p>" }},
      { type: "readings", content: {} }
    ]
  },
  engage: {
    type: "engage",
    content: [
      { type: "subHeading", content: { text: "Engage & Discuss" }},
      { type: "questions", content: {} }
    ]
  },
  listen: {
    type: "listen",
    content: [
      { type: "subHeading", content: { text: "Listen" }},
      { type: "podcasts", content: {} }
    ]
  },
  resources: {
    type: "resources",
    content: [
      { type: "subHeading", content: { text: "Additional Resources" }},
      { type: "resources", content: {} }
    ]
  },
  watch: {
    type: "watch",
    content: [
      { type: "subHeading", content: { text: "Watch" }},
      { type: "paragraph", content: { text: "<p>Section introduction</p>" }},
      { type: "videos", content: { playlist: { text: "https://www.youtube.com/playlist?list=PLdoZWhB3tGKokaXE3fw7Qe_i9kCWGOYzW" }}}
    ]
  },
}

export const HOME_URLS = {
  en: "/",
  fr: "/fr/"
}