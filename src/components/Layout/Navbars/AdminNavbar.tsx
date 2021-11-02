import React from 'react';

import { ChainInformation } from '@src/components/Web3/Chain/ChainInformation';
import Web3WalletConnection from '@src/views/Web3WalletConnection';

export default function AdminNavbar() {
  return (
    <nav className="grid grid-cols-12 w-full z-10 bg-purple-900 bg-opacity-100 p-4">
      <div className="col-span-6 flex items-center flex-1 text-white">
        <ChainInformation showChainId />
      </div>
      <div className="col-span-6 w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <a
          className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        ></a>
        <Web3WalletConnection className="text-white p-3 rounded-lg shadow-md hover:shadow-lg" />
      </div>
    </nav>
  );
}
