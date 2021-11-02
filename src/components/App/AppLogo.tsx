import AppConfig from '@src/config/app';
import classNames from 'classnames';
import Link from 'next/link';

interface AppLogoProps {
  className?: string;
  defaultStyle?: boolean;
}

export const AppLogo = ({ className, defaultStyle }: AppLogoProps) => {
  const styleBase = classNames('flex items-center justify-between');
  const styleName = classNames(
    className,
    'app-logo',
    'cursor-pointer font-bold text-xl hover:opacity-70',
    {
      'text-purple-600 hover:text-purple-700': defaultStyle,
    }
  );
  return (
    <div className={styleBase}>
      <Link passHref={true} href="/">
        <span className={styleName}>{AppConfig.title}</span>
      </Link>
      <span className="">{AppConfig.emoji}</span>
    </div>
  );
};
export default AppLogo;
