import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, View } from "react-native";
import { RootStackParamList } from "~/types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const TempNavigation = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View className="w-2/3 mt-5 mx-auto my-[10%] flex flex-col justify-center items-center gap-3">
            <Text className="">This is temporary routing just for testing different pages</Text>

            <TouchableOpacity
            disabled
            className="w-fit px-6 py-1.5 border border-neutral-400 rounded bg-sky-600"
            onPress={()=>navigation.navigate('Home')}
            >
                <Text className="text-white">Launch Your App</Text>
            </TouchableOpacity>


            <TouchableOpacity
            className="w-fit px-6 py-1.5 border border-neutral-400 rounded bg-sky-600 text-white"
            onPress={()=>navigation.navigate('Home')}
            >
                <Text className="text-white">Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
            className="w-fit px-6 py-1.5 border border-neutral-400 rounded bg-sky-600 text-white"
            onPress={()=>navigation.navigate('Home')}
            >
                <Text className="text-white">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            className="w-fit px-6 py-1.5 border border-neutral-400 rounded bg-sky-600 text-white"
            onPress={()=>navigation.navigate('Home')}
            >
                <Text className="text-white">Register</Text>
            </TouchableOpacity>
        </View>
    );
}
export default TempNavigation;