import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <div>Rodapé</div>
    </>
  );
}

export default DefaultLayout;
