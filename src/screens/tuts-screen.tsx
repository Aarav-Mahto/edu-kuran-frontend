import { View } from "react-native";
import { TutsTutorData } from "../data/tutsData";
import TutsCard from "../components/tuts-card";

const TutsScreen = () => {

  const handleFilterApply = (filters: any) => {
    alert('Applied Filters:' + filters);
  };

  return (
    <View className="flex-1">
      <TutsCard
        data={TutsTutorData}
        onTutsTutorClicked={(id: string, tutsType: string) =>
          alert(`Go to tutor: ${id} (${tutsType})`)
        }
      />
    </View>
  );
}
export default TutsScreen;