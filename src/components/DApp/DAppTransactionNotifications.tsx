// @ts-nocheck
import { useEffect } from 'react';

import { shortenAddress } from '@src/utils/convert';
import { useNotifications } from '@usedapp/core';
import { Toaster, toast } from 'react-hot-toast';

const Toast = ({ status, label, description, to, address, icon }) => {
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
export const DAppTransactionNotifications = (props) => {
  const { notifications } = useNotifications();

  useEffect(() => {
    if (notifications.length > 0) {
      notifications.forEach((notif) => {
        switch (notif.type) {
          case 'transactionStarted':
            toast(
              <Toast
                status="Started"
                label={notif.transactionName.label}
                description={notif.transactionName.description}
                to={notif.transactionName.to}
                icon={notif.transactionName.image}
                address={notif.transactionName.address}
              />
              // { duration: 4000 }
            );
            break;
          case 'transactionSucceed':
            toast(
              <Toast
                status="Success"
                label={notif.transactionName.label}
                description={notif.transactionName.description}
                to={notif.transactionName.to}
                icon={notif.transactionName.image}
                address={notif.transactionName.address}
              />
              // { duration: 4000 }
            );
            break;
          default:
            break;
        }
      });
    }
  }, [notifications]);

  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        // Define default options
        className: '',
        duration: 6000,
        style: {
          background: '#FFF',
          color: '#000',
        },
        // Default options for specific types
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
