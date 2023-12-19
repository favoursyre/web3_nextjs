"use client";

//This contains the script for footer component

//Library
//import { useGlobalContext } from "@/app/react-query-provider/reactQueryProvider";
//import GetCookie from "@/hooks/cookies/getCookie";
import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";
import { useState } from "react";
import FAQModal from '../faq-modal/FAQModal';
//import UnlockRewards from "../unlock-rewards/unlockRewards";
//import { useFaqModalStore } from "@/store";

///Commencing the code

/** 
 * @title The Footer Component
 * @returns The Footer component
 */
const Footer: FC = () => {
  const router = usePathname();
  const[showFaqModal, setShowFaqModal] = useState(false);
  //let showFaqModal = useFaqModalStore((state) => state.showFaqModal)
  //const { isLoggedin, setIsLoggedIn } = useGlobalContext();
  //console.log("isLogged In", isLoggedin);
  //console.log("faq: ", showFaqModal);

  // useEffect(() => {
  //   const userId = GetCookie('userId');
  //   // if(userId != '') {
  //   //   setIsLoggedIn(true);
  //   // }
  // }, [])

  const handleFaqModal = () => {
    setShowFaqModal(!showFaqModal);
    //useFaqModalStore((state) => state.setShowFaqModal(!showFaqModal))
  }

  return (
    <footer className={router === "/flip-coin" ? "footer flip-footer" : "footer"}>
      {/* { isLoggedin && <UnlockRewards /> } */}
      <h3 className="footer__heading">
        3% fees apply for every flip. Refer to <button onClick={() => handleFaqModal()} className="footer__heading-number">FAQs</button> for more information.
      </h3>
      <h3 className="footer__subheading">Game powered by https://ordinals.com/   <br /> <span>All rights reserved to Flick the Bean</span></h3>
      <FAQModal show={showFaqModal} handleModal={handleFaqModal} />
    </footer>
  )
}

export default Footer;