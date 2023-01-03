import React from 'react';

import Navbar from '../../organisms/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="">
      <Navbar />
      <div className="px-32 py-20">{children}</div>
    </div>
  );
};

export default Layout;
