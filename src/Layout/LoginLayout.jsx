import { Outlet } from 'react-router-dom';
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import SingleFooter from "../components/SingleFooter/SingleFooter";


const LoginLayout = () => {
  return (
    <>
    <HeaderNavBar />
      <Outlet/>
    <SingleFooter />
    </>
  )
}

export default LoginLayout;
