// @ts-nocheck
import { useState } from 'react';

import { useEthers, getChainName } from '@usedapp/core';
import classNames from 'classnames';
import Switch from 'react-switch';

interface NetworkSelectorProps {
  className?: string;
}

export const NetworkSelector = ({ className }: NetworkSelectorProps) => {
  const { chainId } = useEthers();

  const chainName = getChainName(chainId);
  const styleBase = classNames('flex items-center');

  const networks = [
    {
      label: 'Ethereum (1)',
      chainId: 1,
      image: '/assets/networks/ethereum.png',
    },
    {
      label: 'Polygon (137)',
      chainId: 137,
      image: '/assets/networks/polygon.png',
    },
  ];

  const networksTestnet = [
    {
      label: 'Ethereum (4)',
      chainId: 1,
      image: '/assets/networks/ethereum.png',
    },
    {
      label: 'Polygon (8007)',
      chainId: 8007,
      image: '/assets/networks/polygon.png',
    },
  ];

  const [isChecked, isCheckedSet] = useState<boolean>(false);

  const handleChange = () => {
    isCheckedSet(!isChecked);
  };

  const networksSelected = isChecked ? networksTestnet : networks;

  return (
    <div className={styleBase}>
      <div className="">
        <label className="flex items-center">
          <span className="font-bold text-xs mx-1">testnets</span>
          <Switch height={20} width={42} onChange={handleChange} checked={isChecked} />
        </label>
      </div>
      {networksSelected.map((network, idx) => (
        <Network key={idx} {...network} currentNetwork={chainName} currentChainId={chainId} />
      ))}
    </div>
  );
};

interface NetworkProps {
  className?: string;
  label?: string;
  image?: string;
  chainId?: string | number;
  currentNetwork?: string;
  currentChainId?: string | number;
}

const Network = ({
  className,
  label,
  image,
  chainId,
  currentChainId,
  currentNetwork,
}: NetworkProps) => {
  const styleBase = classNames(
    className,
    'flex items-center cursor-pointer py-2 px-4 mx-1 text-sm rounded-md hover-up',
    {
      'bg-gray-200 text-gray-600': chainId !== currentChainId,
      'bg-purple-800 text-white': chainId === currentChainId,
    }
  );

  return (
    <div className={styleBase}>
      <img alt={label} src={image} width={22} /> <span className="font-bold ml-2">{label}</span>
    </div>
  );
};

export default NetworkSelector;
