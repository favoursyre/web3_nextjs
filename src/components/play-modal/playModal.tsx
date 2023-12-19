"use client";

///This script is for play modal

//Libraries
import { useGlobalContext } from "@/app/react-query-provider/reactQueryProvider";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { FC, useState, MouseEvent } from "react";
import Modal from "../modal/modal";
import { handleLeather } from "./leather";
import { handleUnisat } from "./unisat";
import { handleXverse } from './xverse';
import { PlayModalProps } from "@/config/interfaces";


///Commencing the code
Object.defineProperty(global, "_bitcore", {
	get() {
		return undefined;
	},
	set() { },
});

/**
 * @title PlayModal Component
 * @returns The PlayModal component
 */
const PlayModal: FC<PlayModalProps> = ({ show, handleModal }) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { isLoggedin, setIsLoggedIn } = useGlobalContext();

	//Connect wallet
	const connectWallet = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, wallet: string) => {
		e.preventDefault()
		
		setLoading(() => true);

		let flag: boolean | undefined
		switch (wallet) {
			case "Leather":
				flag = await handleLeather();
				break
			case "Unisat":
				flag = await handleUnisat();
				break
			case "Xverse":
				flag = await handleXverse();
				break
			default:
				null
		}

		if (flag) {
			router.push('/flip-coin');
			setIsLoggedIn(true);
			setLoading(false);
			enqueueSnackbar('Logged In', { variant: 'success', anchorOrigin: { horizontal: 'left', vertical: 'top' }})
		} else {
			setLoading(() => false);
		}
	}

	return (
		<Modal customClass={'play-modal'} show={show} handleModal={handleModal}>
			<div className="play-container">
			<h1 className="modal__heading text-center">Connect your <br />wallet to play</h1>
			<p className="modal__text text-center">
				If you dont have a wallet, you can select a <br /> provider 
				and create one now
			</p>
			<div className="modal__btn-wrapper">
				<button disabled={loading} className="btn-secondary" onClick={(e) => connectWallet(e, "Leather")}>
					<img src="/static/img/leather-icon.png" alt="leather-icon" /><span>Leather</span>
				</button>
				<button disabled={loading} className="btn-secondary" onClick={(e) => connectWallet(e, "Unisat")}>
					<img src="/static/img/unisat-icon.png" alt="unisat-icon" /><span>UniSat</span>
				</button>
				<button disabled={loading} className="btn-secondary" onClick={(e) => connectWallet(e, "Xverse")}>
					<img src="/static/img/xverse-icon.png" alt="xverse-icon" /><span>Xverse</span>
				</button>
			</div>
			</div>
		</Modal>
	)
}

export default PlayModal;