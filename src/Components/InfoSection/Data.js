export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  // topLine: "About Me",
  headline: "About Me",
  description:
    "Hello, I'm currently a sophomore majoring in Computer Science with a minor in Business at the University of Central Florida. I'm all about learning new technologies and just experiencing what the world has.",
  buttonLabel: "Resume",
  imgStart: false,
  img: require("./headshot.jpg").default,
  alt: "Resume",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "coursework",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: "Part 2",
  headline: "Technologies",
  description:
    "Coursework includes Computer Science, Data Structures and Algorithms, Object Oriented Programming, Computer Logic and Organization, Matrix and Linear Algebra, Calculus 1,2,3, and Discrete Structures",
  buttonLabel: "Contact Me",
  imgStart: true,
  img: require("./random2.jpg").default,
  alt: "Random2",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "timeline1",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: "Part 3",
  headline: "random words",
  description: "random words",
  buttonLabel: "Contact Me",
  imgStart: false,
  img: require("./random3.jpg").default,
  alt: "Random3",
  dark: false,
  primary: false,
  darkText: true,
};
