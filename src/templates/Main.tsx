import { ReactNode } from 'react';

import AppConfig from '@src/config/app';
import Web3WalletConnection from '@src/views/Web3WalletConnection';
import Link from 'next/link';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 min-h-vh flex flex-col">
    {props.meta}

    <div className=" bg-gray-50 shadow-sm border-b border-gray-300 mx-auto py-4 px-6 w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3 b-8 flex items-center">
          <Link passHref={true} href="/">
            <span className="font-bold text-md cursor-pointer text-purple-600 hover:text-purple-700">
              {AppConfig.title}
            </span>
          </Link>
        </div>
        <div className="col-span-5 flex items-center">
          <ul className="flex flex-wrap text-sm">
            <li className="mr-6">
              <a
                className="text-gray-700 border-none hover:text-gray-900"
                href={AppConfig.githubUrl}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-4 flex items-center justify-end ">
          <Web3WalletConnection />
        </div>
      </div>
    </div>

    <div className="flex-1 flex-grow h-3/5">
      <div className="max-w-5xl mx-auto">
        <div className="py-5 text-xl content">{props.children}</div>
      </div>
    </div>

    <div className="bg-gray-50 border-t border-gray-300 text-center py-8 text-sm flex- flex-shrink">
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </div>
  </div>
);

export default Main;
