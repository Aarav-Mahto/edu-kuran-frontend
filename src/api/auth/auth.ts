import { create } from "zustand";

// ---------------- Languages ----------------
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  direction: "ltr" | "rtl";
}

export const AVAILABLE_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", direction: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", direction: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", direction: "rtl" },
  { code: "ar", name: "Arabic", nativeName: "العربية", direction: "rtl" },
];

// ---------------- Auth Store ----------------
interface User {
  id: string;
  phoneNumber: string;
  name?: string;
}

interface AuthState {
  selectedLanguage: Language;
  setLanguage: (language: Language) => void;

  user: User | null;
  setUser: (user: User | null) => void;

  isAuthenticated: boolean;
  setAuthenticated: (status: boolean) => void;

  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  selectedLanguage: AVAILABLE_LANGUAGES[0],
  setLanguage: (language) => set({ selectedLanguage: language }),

  user: null,
  setUser: (user) => set({ user }),

  isAuthenticated: false,
  setAuthenticated: (status) => set({ isAuthenticated: status }),

  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
}));

// ---------------- Auth API (mock) ----------------
// Replace with real API calls later
export const authAPI = {
  async checkUser(phoneNumber: string): Promise<{ success: boolean; data?: { exists: boolean }; error?: string }> {
    try {
      // Example backend call
      // const res = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/check-user`, { method: "POST", body: JSON.stringify({ phoneNumber }) });
      // return await res.json();

      // Mock: phone numbers ending with "5" exist
      const exists = phoneNumber.endsWith("5");
      return { success: true, data: { exists } };
    } catch (error) {
      return { success: false, error: "Failed to check user" };
    }
  },

  async sendOTP(phoneNumber: string): Promise<{ success: boolean; error?: string }> {
    try {
      console.log("Sending OTP to", phoneNumber);
      return { success: true };
    } catch (error) {
      return { success: false, error: "Failed to send OTP" };
    }
  },

  async verifyOTP({
    phoneNumber,
    otp,
  }: {
    phoneNumber: string;
    otp: string;
  }): Promise<{
    success: boolean;
    data?: { success: boolean; accessToken?: string; user?: User };
    error?: string;
  }> {
    try {
      console.log("Verifying OTP:", otp);

      // Mock success only if OTP = "123456"
      if (otp === "123456") {
        return {
          success: true,
          data: {
            success: true,
            accessToken: "mocked_access_token",
            user: { id: "1", phoneNumber, name: "Test User" },
          },
        };
      }

      return { success: false, error: "Invalid OTP" };
    } catch (error) {
      return { success: false, error: "Failed to verify OTP" };
    }
  },

  async login(phoneNumber: string): Promise<{
    success: boolean;
    data?: { accessToken: string; user: User };
    error?: string;
  }> {
    try {
      return {
        success: true,
        data: {
          accessToken: "mocked_login_token",
          user: { id: "1", phoneNumber, name: "Existing User" },
        },
      };
    } catch (error) {
      return { success: false, error: "Failed to login" };
    }
  },
};
