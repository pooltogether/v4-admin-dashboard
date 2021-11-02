import { ReactElement } from 'react';

interface IDashboardStatistic {
  render: ReactElement;
  label: string;
  labelStyle: string | object | Array<string>;
}

export const DashboardStatistic = ({
  render,
  label,
  labelStyle,
}: IDashboardStatistic): ReactElement => {
  return (
    <div className="bg-white p-6 rounded-xl hover:shadow-lg shadow-md">
      {render}
      <span className={`mt-3 block ${labelStyle}`}>{label}</span>
    </div>
  );
};
