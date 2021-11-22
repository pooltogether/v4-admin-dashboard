import { useEffect, useState } from 'react';

import { MenuItemSidebar } from '@src/components/Layout/Menu/MenuItemSidebar';
import { useEthers } from '@usedapp/core';
import idx from 'idx';

/**
 * @name MenuContractList
 * @param {Object} props
 */
export const MenuContractList = ({ contracts }) => {
  const { chainId } = useEthers();

  const [items, itemsSet] = useState<any>([]);
  useEffect(() => {
    const keys = Object.keys(contracts);
    itemsSet(
      Object.values(contracts).map((contract: any, key) => ({
        label: keys[key],
        address: contract[chainId || 0],
      }))
    );
  }, [chainId, contracts]);

  if (idx(items, (_) => _.length) === 0) return null;

  return items.map((item, key) => (
    <MenuItemSidebar
      key={key}
      label={item.label}
      href={`/contract/${item.address}`}
    />
  ));
};

export default MenuContractList;
