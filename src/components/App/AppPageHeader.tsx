import React from 'react';

import classNames from 'classnames';

interface AppPageHeaderProps {
  className?: string;
  classNameTitle?: string;
  classNameDescription?: string;
  title: string;
  description: string;
}

export const AppPageHeader = ({
  className,
  classNameTitle,
  classNameDescription,
  title,
  description,
}: AppPageHeaderProps) => {
  const styleBase = classNames(
    className,
    'app-page-header flex items-center justify-between border-b-2'
  );
  const styleTitle = classNames(classNameTitle, 'font-semibold text-3xl');
  const styleDescription = classNames(
    classNameDescription,
    'tag tag-white ml-2'
  );

  return (
    <div className={styleBase}>
      <h3 className={styleTitle}>{title}</h3>{' '}
      <span className={styleDescription}>{description}</span>
    </div>
  );
};

export default AppPageHeader;
