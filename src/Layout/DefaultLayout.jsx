import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
    <HeaderNavBar />
      <Outlet/>
    <Footer />
    </>
  )
}

export default DefaultLayout;
