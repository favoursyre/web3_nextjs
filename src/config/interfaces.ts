//This contains all interfaces for this project

//Libraries
import React, { ReactNode } from "react"

//Commencing the code

//Declaring interface for header component
interface NavbarProps {
}

//Interface for query provider
export interface ReactQueryProviderProps {
    children: React.ReactNode;
}

//Type for login context
export type LoginContext = {
    isLoggedin: boolean
    setIsLoggedIn:(c: boolean) => void
}

//Props for FAQ component
export interface FaqModalProps {
	show: boolean;
  handleModal: () => void;
}

//Interface for balance store
export interface BalanceStore {
  balance: number;
  updateBalance: (newBalance: number) => void;
}

//Interface for faq modal store
export interface FaqModalStore {
  showFaqModal: boolean;
  setShowFaqModal: (show: boolean) => void
}

//Interface for login store
export interface LoginStore {
  isLoggedin: boolean,
  setIsLoggedIn: (status: boolean) => void
};

//Interface for modal props
export interface ModalProps {
	show: boolean;
  handleModal: () => void;
  children: ReactNode;
  customClass: string;
}

//Interface for add fund modal
export interface AddFundModalProps {
  show: boolean;
  handleModal: () => void;
}

//Interface for badge modal
export interface BadgeModalProps {
	badge: {
		name: string,
		count: number
	},
	show: boolean;
  handleModal: () => void;
}

//Interface for table data
export interface tableData {
  bet_amount: string;
  outcome: string;
  timeAgo: string;
  public_key: string;
}

//Interface for recent flickers
export interface RecentFlickersTableProps {
  tableData: Array<tableData>;
  classname?: string;
}

//Interface for play modal props
export interface PlayModalProps {
	show: boolean;
	handleModal: () => void;
}

//Flip coin data props
export interface dataProps {
	outcome: string,
	public_key: string,
	bet_amount: string,
	timeAgo: string
}

//Interface for profile modal
export interface ProfileModalProps {
	show: boolean;
  handleModal: () => void;
}

///Type for metadata arg props
export type Props = {
  params: { id: string }
  //searchParams: { [key: string]: string | string[] | undefined }
}
