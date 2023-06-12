import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';

const DefaultLayout = ({children}) => {
  return (
    <>
    <HeaderNavBar />
      <Outlet/>
    <Footer />
    </>
  )
}

export default DefaultLayout;
