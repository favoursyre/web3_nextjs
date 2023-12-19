"use client"

import Error from "@/components/error/error";
import FlipCoinContent from "@/components/flip-coin-content/flipCoinContent";
import GetCookie from "@/hooks/cookies/getCookie";
import { useEffect, useState } from "react";
import { Metadata } from 'next'
import { Props } from "@/config/interfaces";

///Commencing the code
// const metadata: Metadata = {
//   title: 'Flip Coin',
//   description: `Flip the coin`,
//   alternates: {
//     canonical: `/flip-coin`
//   }
// }

export default function FlipCoin() {
  const[isError, setIsError] = useState(false);
  const[show, setShow] = useState(false);
  const userId = GetCookie('userId');
  //const[userId, setUserId] = useState('');

  useEffect(() => {
    document.title = "Dashboard | Bazuki"

    setTimeout(() => {
      setShow(true)
    }, 500);
		if (userId === '') {
      setIsError(true);
		} else {
      setIsError(false);
    }
  }, [])

  return (
    <>
      {
        show ? (
          isError ? (
            <Error
              message={'Please login first to access this page'}
              route={'/'}
              icon={'svgs/stop.svg'}
            />
          ) : (
            <FlipCoinContent />
          )
        ) : null
      }
    </>
  )
}
