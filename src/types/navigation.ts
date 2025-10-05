import { CoursesCategoryId } from "./courses";

export type RootStackParamList = {
  Language: undefined;
  MobileNumber: undefined;
  OTP: { phoneNumber: string };
  UserPassword: { phoneNumber: string };
  Home: undefined;
  Saved: undefined;
  Messages: undefined;
  Dashboard: undefined;
  TutorialCategory: { category: string };
  SearchPage: { autoFocusSearch: boolean, selectedCategoryId?: CoursesCategoryId | null; }; 
  AllCourses: undefined;
  Chat: undefined;
  MyCourses: undefined;
  Tutorials: undefined;
  Profile: undefined;
  Account: undefined;
  Settings: undefined;
  Support: undefined;
  Favorites: undefined;
  Notifications: undefined;
  TutsDetails: { id: string };
  TutorProfile: { id: string };
  Orders: undefined;
  // Full-screen Menu System
  Menu: undefined;
  ChatMenu: undefined;
  MyCoursesMenu: undefined;
  AllCoursesMenu: undefined;
  TutorialsMenu: undefined;
  ProfileMenu: undefined;
  AccountMenu: undefined;
  SettingsMenu: undefined;
  SupportMenu: undefined;
  // Menu child screens (detail pages)
  ChatDetail: { chatType: string };
  CourseDetail: { courseType: string };
  CourseCategory: { category: string };
  TutorialDetail: { type: string };
  ProfileDetail: { section: string };
  AccountDetail: { section: string };
  SettingDetail: { section: string };
  SupportDetail: { section: string };
};