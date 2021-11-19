import { ReactElement } from 'react';

interface IJustifyBetween {
  children: ReactElement | ReactElement[];
}

export const JustifyBetween = ({ children }: IJustifyBetween): ReactElement => {
  return <div className="flex justify-between">{children}</div>;
};
