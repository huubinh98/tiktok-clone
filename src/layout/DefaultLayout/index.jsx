import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  const cx = classNames.bind(style);
  return (
    <>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
