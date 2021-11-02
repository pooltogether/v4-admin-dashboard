import React from 'react';

import { WalletAddress } from '@src/components/Web3/Wallet/WalletAddress';
import { WalletBlockie } from '@src/components/Web3/Wallet/WalletBlockie';
import { WalletConnectSelectionModal } from '@src/components/Web3/Wallet/WalletConnectSelectionModal';
import { WalletDisconnect } from '@src/components/Web3/Wallet/WalletDisconnect';
import { WalletIsConnected } from '@src/components/Web3/Wallet/WalletIsConnected';

interface Web3WalletConnectionProps {
  className?: string;
}

// @ts-ignore
export const Web3WalletConnection = ({ className }: Web3WalletConnectionProps) => {
  return (
    <div className={className}>
      <WalletIsConnected>
        <div className="flex items-center">
          <WalletAddress className="font-medium mr-2" />
          <WalletBlockie className="rounded-full hover-up border-2 " width={32} />
          <WalletDisconnect className="cursor-pointer ml-2 text-xs" label="Disconnect" />
        </div>
        <WalletConnectSelectionModal label="Connect to Web3" className="btn btn-green text-md" />
      </WalletIsConnected>
    </div>
  );
};

export default Web3WalletConnection;
