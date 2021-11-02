import { Meta } from '@src/layout/Meta';
import { Admin } from '@src/templates/Admin';

const Manage = () => {
  return (
    <div className="">
      <Meta title="V4 Admin Dashboard" description="PoolTogether V4 Admin Dashbard" />
      <h3 className="font-semibold text-5xl">Manage</h3>
      <p className="">Coming Soon</p>
    </div>
  );
};

Manage.layout = Admin;

export default Manage;
