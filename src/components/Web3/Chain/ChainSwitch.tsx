import { useState } from 'react';

import { bridgeMainnet, bridgeTestnet } from '@src/config/bridging';
import { useEthers, getChainName } from '@usedapp/core';
import classNames from 'classnames';
import Switch from 'react-switch';

interface NetworkProps {
  className?: string;
  label?: string;
  image?: string;
  chainId?: string | number;
  chainName?: string;
  chainType?: string;
  chainNetwork?: string;
  currentChainName?: string;
  chain?: any;
  currentChainId?: string | number;
  handleChangeNetwork: Function;
}

const Network = ({
  className,
  label,
  image,
  chainNetwork,
  chainId,
  chain,
  currentChainId,
  handleChangeNetwork,
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
    <div className={styleBase} onClick={() => handleChangeNetwork(chainId, chain)}>
      <img alt={label} src={image} width={22} />{' '}
      <span className="font-bold ml-2">
        {chainNetwork} <span className="font-normal text-xs">(ID: {chainId})</span>
      </span>
    </div>
  );
};

interface ChainSwitchProps {
  className?: string;
}

export const ChainSwitch = ({ className }: ChainSwitchProps) => {
  const { chainId, library } = useEthers();
  const chainName = getChainName(chainId);
  const styleBase = classNames(className, 'flex items-center');
  const networks = bridgeMainnet;
  const networksTestnet = bridgeTestnet;
  const [isChecked, isCheckedSet] = useState<boolean>(true);
  const handleChange = () => {
    isCheckedSet(!isChecked);
  };

  const networksSelected = !isChecked ? networksTestnet : networks;

  const handleChangeNetwork = async (chainIdChange: any, chainParams: any) => {
    try {
      await library?.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainIdChange}` }],
      });
    } catch (error) {
      if (error.code === 4902) {
        await library?.provider.request({
          method: 'wallet_addEthereumChain',
          params: chainParams,
        });
      }
    }
  };

  return (
    <div className={styleBase}>
      <div className="">
        <label className="flex items-center">
          <span className="font-bold text-xs mx-1">MAINNET</span>
          <Switch height={20} width={42} onChange={handleChange} checked={isChecked} />
        </label>
      </div>
      {networksSelected.map((network, idx) => (
        <Network
          key={idx}
          {...network}
          chainId={network.chainId}
          chainName={network.chainName}
          chainType={network.chainType}
          chain={network.chain}
          currentChainName={chainName}
          currentChainId={chainId}
          handleChangeNetwork={handleChangeNetwork}
        />
      ))}
    </div>
  );
};

export default ChainSwitch;
