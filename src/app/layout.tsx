//The script for the layout


//Libraries
import type { Metadata } from 'next';
import React from 'react';
import './../../styles/main.scss';
import ReactQueryProvider from './react-query-provider/reactQueryProvider';
import { companyName, domainName } from '@/config/utils';

///Commencing the code

///Declaring the metadata
export const metadata: Metadata = {
  metadataBase: new URL(domainName), 
  title: {
    default: `${companyName}`,
    template: `%s | ${companyName}`
  },
  icons: {
    icon: 'favicon.ico',
  },
  description: `Flip the bean.`,
  keywords: "token, cryptocurrency, web3, defi, digital"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}
