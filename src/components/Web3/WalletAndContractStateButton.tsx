import classNames from 'classnames';

interface WalletAndContractStateButtonProps {
  children: React.ReactNode;
  className?: string;
  classNameActive?: string;
  classNameConnected?: string;
  address?: string;
  isActive: boolean;
  isConnected: boolean;
}

export const WalletAndContractStateButton = ({
  children,
  className,
  classNameActive,
  classNameConnected,
  isActive,
  isConnected,
}: WalletAndContractStateButtonProps) => {
  const styleBase = classNames(className, 'WalletAndContractStateButton', {
    'is-disabled btn btn-disabled': !isActive && !isConnected,
    'is-active btn-gray': !classNameActive && isActive && !isConnected,
    'is-connected btn-green': !classNameConnected && isActive && isConnected,
    [`${classNameConnected}`]: !!classNameConnected && isActive && isConnected,
    [`${classNameActive}`]: !!classNameActive && isActive && !isConnected,
  });
  return <button className={styleBase}>{children}</button>;
};

export default WalletAndContractStateButton;
