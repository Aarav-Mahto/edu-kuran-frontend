// ✅ Define union type for category IDs
export type CoursesCategoryId =
  | "tajweed"
  | "recitations"
  | "hifz"
  | "arabic"
  | "islamicStudies";

export type Course = {
  id: CoursesCategoryId; // 👈 strongly typed to only valid categories
  title: string;
  coverImg: any; // require(...) returns any in React Native
  onPress?: () => string;
};

export type CoursesMap = {
  [key in CoursesCategoryId]: Course;
};

// ✅ Strongly typed object
export const Courses: CoursesMap = {
  tajweed: {
    id: "tajweed",
    title: "Tajweed",
    coverImg: require("../assets/book1.png"),
  },
  recitations: {
    id: "recitations",
    title: "Recitations",
    coverImg: require("../assets/book1.png"),
  },
  hifz: {
    id: "hifz",
    title: "Hifz",
    coverImg: require("../assets/book1.png"),
  },
  arabic: {
    id: "arabic",
    title: "Arabic",
    coverImg: require("../assets/book1.png"),
  },
  islamicStudies: {
    id: "islamicStudies",
    title: "Islamic Studies",
    coverImg: require("../assets/book1.png"),
  },
};
