import { useEffect } from 'react';

import { shortenAddress } from '@src/utils/convert';
import { useNotifications } from '@usedapp/core';
import { Toaster, toast } from 'react-hot-toast';

interface IToast {
  status?: string;
  label?: string;
  description?: string;
  to?: string;
}

const Toast = ({ status, label, description, to }: IToast) => {
  return (
    <div className="flex items-center">
      <div className="mx-3 my-2">
        <h3 className="font-normal text-lg">
          {label} <span className="text-gray-700 font-light">{status}</span>{' '}
        </h3>
        <span className="text-xs text-gray-500">{description}</span>
        <div className="">
          <span className="text-xs">To: {shortenAddress(to, 10)}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * @name DAppTransactionNotifications
 * @param {Object} props
 */
export const DAppTransactionNotifications = () => {
  const { notifications } = useNotifications();

  useEffect(() => {
    if (notifications.length > 0) {
      notifications.forEach((notif) => {
        switch (notif.type) {
          case 'transactionStarted':
            toast(<Toast status="Started" label={''} description={''} to={''} />);
            break;
          case 'transactionSucceed':
            toast(<Toast status="Success" label={''} description={''} to={''} />);
            break;
          default:
            return null;
        }
      });
    }
  }, [notifications]);

  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className: '',
        duration: 6000,
        style: {
          background: '#FFF',
          color: '#000',
        },
        success: {
          duration: 6000,
          theme: {
            primary: 'green',
            secondary: 'white',
          },
        },
      }}
    />
  );
};
export default DAppTransactionNotifications;
