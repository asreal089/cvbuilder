import React, { PropsWithChildren, useMemo } from 'react';
import Navbar from './navbar';
import Head from 'next/head';
import Footer from './footer';

type LayoutProps = PropsWithChildren<{}>;


const Layout = ({ children  }: LayoutProps): JSX.Element => {
  const navbar = useMemo(() => <Navbar />, []);
  return (
    <>
      <Head>
        <title>CV Build</title>
        <meta
          name="description"
          content="a place where you can store your cv. Browse our collection of CVs from professionals in various industries."
        />
        <meta name="description" content="" />
        <meta name="keywords" content="CV, resume, job, career, professionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </>
  );
};

export default Layout;