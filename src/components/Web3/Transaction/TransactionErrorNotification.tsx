import React, { useEffect, useMemo, useState } from 'react';

import { AppInformationPopover } from '@src/components/App/AppInformationPopover';
import { utils } from 'ethers';
import { AlertOctagon } from 'react-feather';
import { toast, useToaster } from 'react-hot-toast';

interface ToastProps {
  tid: string;
  address?: string;
  label: string;
  state: any;
  description?: string;
}

const Toast = ({ label, description, address, state, tid }: ToastProps) => {
  console.log(tid, 'tidtid');
  return (
    <>
      <div
        className={`max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 items-center w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <AlertOctagon className="text-red-600" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="font-semibold text-lg border-b-0 mb-1">
                <span className="inline-block">{label}</span>{' '}
                <AppInformationPopover className="inline-block -mt-1" content={description} />
              </h3>
              <p className="">
                <span className="font-bold">Error:</span> {state?.errorMessage}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200 rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <div className="flex-1 hover:bg-gray-100">
              <button
                onClick={() => toast.dismiss(tid)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
            {address && (
              <div className="flex-1 flex items-center justify-center hover:bg-gray-100 text-center">
                <span className="hover-up">
                  <a
                    target="_blank"
                    href={`https://etherscan.io/address/${address}`}
                    rel="noreferrer"
                  >
                    <img
                      className="h-4 w-4 rounded-full hover:shadow-sm"
                      src="/assets/networks/etherscan.svg"
                      alt=""
                    />
                  </a>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

interface TransactionErrorNotificationProps {
  label: string;
  description: string;
  address?: string;
  state: any;
  error: any;
  config: any;
}
export const TransactionErrorNotification = ({
  address,
  state,
  label,
  description,
  config,
}: TransactionErrorNotificationProps) => {
  const { toasts } = useToaster();

  const TOAST_LIMIT = 3;

  const [toastsActive, setToastsActive] = useState<any>();
  const [currentToastId, setCurrentToastId] = useState<string>();
  const notificationId = useMemo(() => {
    const stringId = JSON.stringify(state) + address;
    return utils.id(stringId);
  }, [address, state]);

  useEffect(() => {
    if (toasts.length === 0) {
      setToastsActive(false);
    } else {
      setToastsActive(true);
    }
  }, [toasts]);

  useEffect(() => {
    if (
      state.status === 'Exception' &&
      toasts.length < TOAST_LIMIT &&
      (!toastsActive || currentToastId !== notificationId)
    ) {
      setCurrentToastId(notificationId);
      toast.custom(
        (t) => (
          <Toast
            tid={t.id}
            state={state}
            label={label}
            description={description}
            address={address}
          />
        ),
        config
      );
    }
  }, [state, config, label, description, address, toasts.length, currentToastId, notificationId]);

  return null;
};

export default TransactionErrorNotification;
