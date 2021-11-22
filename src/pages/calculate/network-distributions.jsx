import { Admin } from '@src/templates/Admin';
import { FormCalculateDistribution } from '@src/components/Calculate/FormCalculateDistribution';

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-5 gap-x-6">
        <div className="col-span-5">
          <FormCalculateDistribution address="0x588f2304b0fac8b9eb7d1ff4c84a1279a1c73796" />
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
