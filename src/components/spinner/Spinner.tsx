


import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" border-8 border-solid  border-t-blue-500 border-r-yellow-500 border-b-red-500 border-l-blue-500border-solid rounded-full w-[90px] h-[90px] animate-spin"></div>
    </div>
  );
};

export default Spinner;
