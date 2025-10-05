export type TutsCardDataProps = {
  tutsId: string;
  image?: any;
  imageText?: any;
  title: string;
  price: string;
  rateType: "hourly" | "weekly";
  tutor: {
    username: string;
    name: string;
    avatar?: any;
    rating?: number;
    shortBio?: string;
    totalRatings?: number;
    tutorLevel?: string;
    onPress: (username: string) => void;
  };
  onPressDetails: (tutsId: string) => void;
};

export type CourseDataProps = {
  tutsId: string;
  tutsType: "tutsCard" | "tutsProfile";
  onTeachesCardClicked: (id: string, tutsType: string) =>void;
  tutor: {
    username: string;
    name: string;
    avatar?: any;
    rating?: number;
    totalRatings?: number;
    tutorLevel?: string;
    language: string[];
  };
  tutsCard?: {
    tutsCategory: string;
    tutsImage: any;
    tutsTitle: string;
    tutsDescription: string;
  }
  tutsProfile?: {
    userShortBio: string;
    userAbout: string;
    userTeaching: string[];
  }
};


export type FeaturedCoursesDataProps = {
  id: string;
  image?: any;
  title?: string;
};

export type TutsTutorProps = {
  tutsId: string;
  tutsType: "tutsCard" | "tutsProfile";
  onTutsTutorClicked: (id: string, tutsType: string) =>void;
  tutor: {
    username: string;
    name: string;
    avatar?: any;
    rating?: number;
    totalRatings?: number;
    tutorLevel?: string;
    language: string[];
  };
  tutsCard?: {
    tutsCategory: string;
    tutsImage: any;
    tutsTitle: string;
    tutsDescription: string;
  }
  tutsProfile?: {
    userShortBio: string;
    userAbout: string;
    userTeaching: string[];
  }
};


export type TutsDetailsProps = {
  tutsId:string;
  tutsCourse:string;
  tutsCourseImg:any;
  tutsTitle:string;
  tutsDescription:string;
  tutsPrice:string;
  continueOrder: (tutsId: string) =>void;
  tutsRattings?:{
    userName:string;
    stars:number;
    userAvtar:any;
    review?:string;
  };
  tutorInfo:{
    tutorName:string;
    tutorUsername:string;
    tutorAvtar:any;
    tutorLang:string[]; 
  }
  tutorCalender:{
    days:string[];
    times:string[];
  }
}
