import { useState } from "react";
import { Alert, ScrollView, View, Text } from "react-native";
import HeroBanner from "~/components/common/hero-banner";
import Header from "~/components/common/hero-header";
import SubHeader from "~/components/common/hero-subHeader";
import TutorCard from "~/components/offer-cards/tutor-card";
import TutsCard from "~/components/offer-cards/tuts-card";
import TempScreen from "~/components/ui/RichTextEditor";
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

const tutors = [
  {
    name: "Aarav Mahto",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non consectetur pariatur! Eaque reprehenderit vitae iusto? Ratione, quasi ut! Sapiente, dignissimos facilis consequuntur pariatur velit, dolorem fuga harum autem consequatur numquam, vel ducimus optio quasi nemo eius explicabo laboriosam! Illum doloribus a dignissimos aperiam, sint molestiae doloremque similique nobis ex.",
    hourlyRate: 30,
    country: "India",
    rating: 4.9,
    profileImage: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Emma Watson",
    subject: "IELTS Speaking Expert",
    hourlyRate: 22,
    country: "UK",
    rating: 5.0,
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const HeroPage = () => {
  const [richText, setRichText] = useState("");
  const { width } = useWindowDimensions();

  const handleItemClick = (item: string) => {
    Alert.alert('Selected', item);
    // You can replace content based on item here
  };

  return (
    <>
      <ScrollView className="flex flex-col gap-5">

        <Header onSelectItem={handleItemClick} />
        <SubHeader />
        <HeroBanner />
        {/* Your homepage content */}

        <TutsCard
          image={null}//={require('../../assets/banner/banner1.webp')}
          imageText="Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert"
          overlayText="Master Tajweed in 30 Days"
          title="1-on-1 Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert"
          price="500"
          rateType="hourly"
          tutor={{
            name: 'Ustadh Ahmad',
            avatar: require('../../assets/userImg.avif'),
            rating: 4.8,
            totalRatings: 42,
            tutorLevel: "Level 2✦",
            onPress: () => alert('Go to tutor profile'),
          }}
          onPressDetails={() => alert('Go to gig details')}
        />
        <TutsCard
          image={require('../../assets/banner/banner1.webp')}
          imageText="Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert"
          overlayText="Master Tajweed in 30 Days"
          title="1-on-1 Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert"
          price="500"
          rateType="hourly"
          tutor={{
            name: 'Ustadh Ahmad',
            avatar: require('../../assets/userImg.avif'),
            rating: 4.8,
            totalRatings: 42,
            tutorLevel: "Level 2✦",
            onPress: () => alert('Go to tutor profile'),
          }}
          onPressDetails={() => alert('Go to gig details')}
        />

        {tutors.map((tutor, index) => (
          <TutorCard
            key={index}
            {...tutor}
            onPressDetails={() => Alert.alert("Gig", `Clicked card of ${tutor.name}`)}
            onPressProfile={() => Alert.alert("Profile", `Viewing profile of ${tutor.name}`)}
          />
        ))}
        <View className="mb-80">
          {richText ? (
            <RenderHtml
              contentWidth={width}
              source={{ html: richText }}
              tagsStyles={{
                p: { color: "#1f2937", fontSize: 16 },
                h1: { fontSize: 20, fontWeight: 'bold' },
                li: { marginVertical: 4 },
              }}
            />
          ) : null}
          <TempScreen onSubmit={(html) => {
            console.log("Editor text:", html);
            setRichText(html);
          }} />

          
        </View>

      </ScrollView>
    </>
  );
};

export default HeroPage;
