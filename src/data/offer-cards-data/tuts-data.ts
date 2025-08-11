import { create } from 'zustand';

type Tutor = {
  name: string;
  avatar: any;
  rating: number;
  id: string;
};

type Gig = {
  id: string;
  image: any;
  overlayText: string;
  title: string;
  price: string;
  rateType: 'hourly' | 'weekly';
  tutor: Tutor;
};

type GigStore = {
  gigs: Gig[];
  setGigs: (gigs: Gig[]) => void;
  fetchGigs: () => void;
};

export const useGigStore = create<GigStore>((set) => ({
  gigs: [],
  setGigs: (gigs) => set({ gigs }),
  fetchGigs: () => {
    // Simulate async fetch (API call)
    const data: Gig[] = [
      {
        id: '1',
        image: require('../assets/banner/tajweed.png'),
        overlayText: 'Master Tajweed in 30 Days',
        title: '1-on-1 Quran Recitation with Certified Tutor',
        price: '₹500',
        rateType: 'hourly',
        tutor: {
          name: 'Ustadh Ahmad',
          avatar: require('../assets/avatars/ahmad.png'),
          rating: 4.8,
          id: 'ahmad123',
        },
      },
      {
        id: '2',
        image: require('../assets/banner/tajweed.png'),
        overlayText: 'Hifz Made Easy',
        title: 'Weekly memorization guidance sessions',
        price: '₹1500',
        rateType: 'weekly',
        tutor: {
          name: 'Ustadh Fatima',
          avatar: require('../assets/avatars/fatima.png'),
          rating: 4.9,
          id: 'fatima456',
        },
      },
    ];
    set({ gigs: data });
  },
}));
