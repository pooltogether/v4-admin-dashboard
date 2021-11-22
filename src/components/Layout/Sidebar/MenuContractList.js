import idx from "idx";
import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { MenuItemSidebar } from "@src/components/Layout/Menu/MenuItemSidebar";
/**
 * @name MenuContractList
 * @param {Object} props
 */
export const MenuContractList = ({ contracts }) => {
  const { chainId } = useEthers();

  const [items, itemsSet] = useState([]);
  useEffect(() => {
    const keys = Object.keys(contracts);
    itemsSet(
      Object.values(contracts).map((contract, idx) => ({
        label: keys[idx],
        address: contract[chainId],
      }))
    );
  }, [chainId]);

  if (idx(items, (_) => _.length) === 0) return null;

  return items.map((item) => (
    <MenuItemSidebar label={item.label} href={`/contract/${item.address}`} icon='fa-anchor' />
  ));
};
export default MenuContractList;
