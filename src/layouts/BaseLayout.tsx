

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import React from 'react';

const BaseLayout: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default BaseLayout;
