import { TutsDetailsProps } from "../types/tuts-type";

export const tutsDetailsData: TutsDetailsProps[] = [
  {
    tutsId: "Aarav009",
    tutsCourse: "React for Beginners",
    tutsCourseImg: require("../assets/book1.png"),
    tutsTitle: "Learn React from Scratch",
    tutsDescription:
      "A beginner-friendly course to learn the fundamentals of React, components, props, state, and hooks.",
    tutsPrice: "$49",
    continueOrder: (tutsId: string) => {
      alert("Continue order: " + tutsId);
    },
    tutsRattings: {
      userName: "John Doe",
      stars: 5,
      userAvtar: require("../assets/userImage.png"),
      review: "Amazing course! Easy to understand and very practical.",
    },
    tutorInfo: {
      tutorName: "Jane Smith",
      tutorUsername: "janesmith_dev",
      tutorAvtar: require("../assets/userImage.jpeg"),
      tutorLang: ["English", "Hindi"],
    },
    tutorCalender: {
      days: ["Monday", "Wednesday", "Friday"],
      times: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
    },
  },
];
