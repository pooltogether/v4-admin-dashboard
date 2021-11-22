interface IDashboardAreaTitle {
  title: string;
  body: string;
  className: string;
}

export const DashboardAreaTitle = ({
  title,
  body,
  className,
}: IDashboardAreaTitle) => {
  return (
    <div className={`flex justify-between border-b-2 pb-2 mb-5 ${className}`}>
      <h3 className="font-bold text-3xl">{title}</h3>
      <span className="tag tag-white self-center">{body}</span>
    </div>
  );
};
