import React from 'react';
import CertificateCarousel from './CertificateCarousel';
import SectionHeading from '../common/SectionHeading';

const CertificatesPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen'>
        <div className='w-full px-4 mb-32 md:mb-16 sm:px-6 md:px-10 lg:px-12 md:mt-28'>
          <SectionHeading title={"Certificates"} />
          <div className="w-full max-w-3xl mx-auto mt-8 lg:max-w-5xl">
            <CertificateCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatesPage;
