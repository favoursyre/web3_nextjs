//This contains the script for state management 

//Libraries
import {create} from "zustand";
import { FaqModalStore, BalanceStore, LoginStore } from "../config/interfaces";
import GetCookie from '@/hooks/cookies/getCookie';

//Commencing code
const userId = GetCookie('userId');

//Balance state store
export const useBalanceStore = create<BalanceStore>((set) => ({
    balance: 0,
    updateBalance: (newBalance) => set({ balance: newBalance }),
}));

//Faq state store
export const useFaqModalStore = create<FaqModalStore>((set) => ({
    showFaqModal: false,
    setShowFaqModal: (show) => set({ showFaqModal: show })
}))

//Login state store
export const useLoginStore = create<LoginStore>((set) => ({
    isLoggedin: userId === "" ? false : true,
    setIsLoggedIn: (status) => set({ isLoggedin: status })
}));