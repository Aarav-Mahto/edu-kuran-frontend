import {
    TutsCardDataProps,
    FeaturedCoursesDataProps,
    CourseDataProps,
    TutsTutorProps
} from "../types/tuts-type";

export const tutsData: TutsCardDataProps[] = [
    {
        tutsId: "Aarav009",
        image: null, // you can set `null` or import an image later
        imageText: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
        title: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
        price: "500",
        rateType: "hourly",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.png"), // keep as string path in JSON
            rating: 4.8,
            totalRatings: 42,
            shortBio: "Experienced Tajweed teacher",
            tutorLevel: "Level 2✦",
            onPress: (username: string) => alert(`Go to tutor profile: ${username}`)
        },
        onPressDetails: (tutsId: string) => alert(`Go to gig details: ${tutsId}`),
    },
    {
        tutsId: "ABC124",
        image: require("../assets/userImage.png"),
        imageText: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
        title: "1-on-1 Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
        price: "500",
        rateType: "hourly",
        tutor: {
            username: "ahmad123",
            name: "Ahmad Ali",
            avatar: require("../assets/userImage.png"),
            rating: 4.8,
            totalRatings: 42,
            shortBio: "Experienced Quran teacher",
            tutorLevel: "Level 2✦",
            onPress: (username: string) => alert(`Go to tutor profile: ${username}`)
        },
        onPressDetails: (tutsId: string) => alert(`Go to gig details: ${tutsId}`),
    }
];

export const CourseData: CourseDataProps[] = [
    {
        tutsId: "Aarav009",
        tutsType: "tutsProfile",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Tajweed",
            tutsImage: require("../assets/coursesImg/tajweed-cover.png"),
            tutsDescription: "Quran Tajweed with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Tajweed with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Tajweed with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies","Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTeachesCardClicked: (tutsId: string, tutsType: string) =>{}
    },
    {
        tutsId: "Aarav009",
        tutsType: "tutsProfile",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Recitation",
            tutsImage: require("../assets/coursesImg/recitation-cover.jpg"),
            tutsDescription: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTeachesCardClicked: (tutsId: string, tutsType: string)=>{}
    },
    {
        tutsId: "Aarav009",
        tutsType: "tutsCard",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Hifz",
            tutsImage: require("../assets/coursesImg/hifz-cover.jpg"),
            tutsDescription: "Quran Hifz with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Hifz with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Hifz with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTeachesCardClicked: (tutsId: string, tutsType: string)=>{}
    },
    {
        tutsId: "Aarav009",
        tutsType: "tutsCard",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Arabic",
            tutsImage: require("../assets/coursesImg/arabic-cover.jpg"),
            tutsDescription: "Quran Arabic with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Arabic with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Arabic with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTeachesCardClicked: (tutsId: string, tutsType: string)=>{}
    },
    {
        tutsId: "Aarav009",
        tutsType: "tutsProfile",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Islamic Studies",
            tutsImage: require("../assets/coursesImg/islamic-studies.png"),
            tutsDescription: "Quran Islamic Studies with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Islamic Studies with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Islamic Studies with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTeachesCardClicked: (tutsId: string, tutsType: string)=>{}
    }
]

export const FeaturedCourcesData: FeaturedCoursesDataProps[] = [
    {
        id: "tajweed",
        image: require('../assets/book1.png'),
        title: "Tajweed Course",
    },
    {
        id: "recitation",
        image: require('../assets/book1.png'),
        title: "Recitation Course",
    },
    {
        id: "hifz",
        image: require('../assets/book1.png'),
        title: "Hifz Course",
    },
    {
        id: "arebic",
        image: require('../assets/book1.png'),
        title: "Arebic Course",
    },
    {
        id: "islamic_studies",
        image: require('../assets/book1.png'),
        title: "Islamic Studies",
    }
]

export const TutsTutorData: TutsTutorProps[] = [
    {
        tutsId: "ABC123",
        tutsType: "tutsProfile",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Tajweed",
            tutsImage: require("../assets/coursesImg/tajweed-cover.png"),
            tutsDescription: "Quran Tajweed with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Tajweed with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Tajweed with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies","Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTutsTutorClicked: (tutsId: string, tutsType: string) =>{}
    },
    {
        tutsId: "ABC124",
        tutsType: "tutsProfile",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Recitation",
            tutsImage: require("../assets/coursesImg/recitation-cover.jpg"),
            tutsDescription: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTutsTutorClicked: (tutsId: string, tutsType: string)=>{}
    },
    {
        tutsId: "ABC125",
        tutsType: "tutsCard",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Hifz",
            tutsImage: require("../assets/coursesImg/hifz-cover.jpg"),
            tutsDescription: "Quran Hifz with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Hifz with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Hifz with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTutsTutorClicked: (tutsId: string, tutsType: string)=>{}
    },
    {
        tutsId: "ABC126",
        tutsType: "tutsCard",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Arabic",
            tutsImage: require("../assets/coursesImg/arabic-cover.jpg"),
            tutsDescription: "Quran Arabic with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Arabic with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Arabic with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTutsTutorClicked: (tutsId: string, tutsType: string)=>{}
    },
    {
        tutsId: "ABC127",
        tutsType: "tutsProfile",
        tutor: {
            username: "ustad123",
            name: "Ustadh Ahmad",
            avatar: require("../assets/userImage.jpeg"),
            rating: 4.9,
            totalRatings: 107,
            tutorLevel: "Level 2✦",
            language: ["English", "Urdu", "Hindi", "Arabic"]
        },
        tutsCard: {
            tutsCategory: "Islamic Studies",
            tutsImage: require("../assets/coursesImg/islamic-studies.png"),
            tutsDescription: "Quran Islamic Studies with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert",
            tutsTitle: "Quran Islamic Studies with Certified Tutor, Learn Tajweed in Details With Become Expert",
        },
        tutsProfile: {
            userShortBio: "Quran Islamic Studies with Certified Tutor, Learn Tajweed in Details With Become Expert",
            userAbout: "I am an experienced Quran teacher with over 10 years of teaching Tajweed to students of all ages. I have a deep understanding of the rules of Tajweed and can help you improve your recitation skills.",
            userTeaching: ["Tajweed", "Recitation", "Hifz", "Arabic", "Islamic Studies"],
        },
        onTutsTutorClicked: (tutsId: string, tutsType: string)=>{}
    }
]
