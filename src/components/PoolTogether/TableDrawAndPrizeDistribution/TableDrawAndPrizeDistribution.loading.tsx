import classNames from 'classnames';

interface LoadingProps {
  className?: string;
  address?: string;
}

export const Loading = ({ className, address }: LoadingProps) => {
  const styleBase = classNames(
    className,
    'bg-white rounded-md  flex items-center justify-between py-20'
  );

  return (
    <div className={styleBase}>
      <div className="text-center text-gray-600 w-full">
        <h3 className="font-normal text-3xl">No Draws Available</h3>
        <span className="tag tag-smoke">Contract: {address}</span>
      </div>
    </div>
  );
};
export default Loading;
