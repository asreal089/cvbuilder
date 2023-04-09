import React, { PropsWithChildren, useMemo } from 'react';
import Navbar from './navbar';

type LayoutProps = PropsWithChildren<{}>;


const Layout = ({ children  }: LayoutProps): JSX.Element => {
  const navbar = useMemo(() => <Navbar />, []);
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;