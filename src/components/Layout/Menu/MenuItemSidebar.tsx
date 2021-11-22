import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IMenuItemSidebar {
  label: string;
  href: string;
  image: Element;
  styled: string | object | Array<any>;
  labelStyle: string;
  iconStyle: string;
  defaultStyle: Boolean;
}

export const MenuItemSidebar = ({
  label,
  href,
  image,
  styled,
  labelStyle,
  iconStyle,
  defaultStyle,
}: IMenuItemSidebar) => {
  const router = useRouter();

  const isMatch = router.pathname.match(href);
  const isExactMatch = isMatch ? isMatch[0] === router.pathname : false;

  const styleItem = classnames('items-center cursor-pointer px-3 py-1', {
    'bg-white hover:bg-gray-100 hover:text-purple-800': defaultStyle,
    'bg-gray-200 font-semibold rounded-md text-purple-900': defaultStyle && isExactMatch,
  });
  const styleBase = classnames('flex items-center justify-between');

  const styleLabel = classnames('text-baseline uppercases py-2 block', labelStyle, {
    'text-sky-500 hover:text-sky-600': isExactMatch,
    'text-blueGray-700 hover:text-blueGray-500': !isExactMatch,
  });

  const styleIcon = classnames(`mr-0 text-sms`, iconStyle, {
    'opacity-75': isExactMatch,
    'text-blueGray-300': !isExactMatch,
  });

  return (
    <li className={styleItem}>
      <Link passHref href={href}>
        <span className={styleBase}>
          <span className={styleLabel}>{label}</span> <span className={styleIcon}>{image}</span>
        </span>
      </Link>
    </li>
  );
};

export default MenuItemSidebar;
