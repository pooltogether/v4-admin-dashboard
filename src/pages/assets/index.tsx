import { AppPageHeader } from '@src/components/App/AppPageHeader';
import { FormERC20Transfer } from '@src/components/Web3/ERC20/FormERC20Transfer';
import { useGetContractAddress } from '@src/hooks/useGetContractAddress';
import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';

const Assets = () => {
  const address = useGetContractAddress('Ticket');

  return (
    <div className="page--assets">
      <Meta title="Assets - V4 PoolTogether" description="PoolTogether V4 Admin Dashbard" />
      <AppPageHeader
        className="mt-0"
        title="Assets"
        description="Manage the Protocol PrizePool Assets"
      />
      <FormERC20Transfer
        className="card mt-6"
        address={address}
        title="Transfer"
        label="Transfer"
        contract="ERC20"
        decimals={6}
      />
    </div>
  );
};

Assets.layout = Admin;

export default Assets;
