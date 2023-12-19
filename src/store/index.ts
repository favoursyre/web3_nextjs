//This contains the script for state management 

//Libraries
import {create} from "zustand";
import { FaqModalStore, BalanceStore } from "../config/interfaces";

//Commencing code
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