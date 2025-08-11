export type RootStackParamList = {
    abc: undefined;
    Home: undefined;
    Details: undefined;
    Tabs: undefined;
    MyCourses: undefined;
    Profile: undefined;
    Support: undefined;
    Settings: undefined;
    Saved: undefined;
    Dashboard: undefined;
    EditProfile: {
        userInfo: any,
        langInfo: any,
        educationInfo: any,
        onSave: (updatedProfile: any, updatedLangInfo: any, updatedEducation: any) => void,
    };
    AllCourses: undefined;
    //Details: { id: number }; //It say your Details screen should receive an id
};