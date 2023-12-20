"use client";

//This contains the script for react file

//Libraries
import Footer from '@/components/footer/Footer';
//import Header from '@/components/header/Header';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from 'notistack';
import React, { FC, createContext, useContext, useState } from 'react';
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header/Header"), { ssr: false })
import { LoginContext, ReactQueryProviderProps } from '@/config/interfaces';

//Commencing the code
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  }
});

// export const Context = createContext<LoginContext>({
//   isLoggedin: false,
//   setIsLoggedIn: () => {}
// });

//export const useGlobalContext = () => useContext(Context)

const ReactQueryProvider:FC<ReactQueryProviderProps> = ({ children }) => {
  //const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);
  return (
    // <Context.Provider value={{isLoggedin, setIsLoggedIn}}>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body>
            {/* <div className="bg-wrapper"> */}
              <Header />
              <main className="main-wrapper">
                <SnackbarProvider autoHideDuration={2000}>
                  {children}
                </SnackbarProvider>
              </main>
              <Footer />
            {/* </div> */}
          </body>
        </html>
      </QueryClientProvider>
    // </Context.Provider>
  );
}

export default ReactQueryProvider;