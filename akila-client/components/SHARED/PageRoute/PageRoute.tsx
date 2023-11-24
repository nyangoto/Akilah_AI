import React, { ReactNode } from 'react';
import Head from 'next/head';

interface PageRouteProps {
  children: ReactNode;
  header?: string;
}
export const PageRoute: React.FC<PageRouteProps> = ({ children, header }) => {
  return (
    <>
      <Head>
        <title>{header}</title>
      </Head>
      {children}
    </>
  );
};
