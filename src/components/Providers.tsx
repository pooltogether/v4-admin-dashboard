/* --- Global Modules --- */
import { ReactElement } from 'react';

import { DAppTransactionNotifications } from '@src/components/DApp/DAppTransactionNotifications';
import { WalletAutoConnect } from '@src/components/Web3/Wallet/WalletAutoConnect';
import { dappConfig } from '@src/config/dapp';
import { DAppProvider } from '@usedapp/core';
import { ModalProvider } from 'react-modal-hook';
import { QueryClient, QueryClientProvider } from 'react-query';

/**
 * @name ProviderPrimary
 * @param {*} props
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

interface IProviders {
  children: ReactElement;
}

export const Providers = ({ children }: IProviders) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DAppProvider config={dappConfig}>
        <>
          <ModalProvider>{children}</ModalProvider>
          <WalletAutoConnect />
          <DAppTransactionNotifications />
        </>
      </DAppProvider>
    </QueryClientProvider>
  );
};

export default Providers;
