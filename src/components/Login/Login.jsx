import { useContext } from 'react';
import RoleContext from '../../Context/Context';
import './Login.scss';

function Login() {
  const {
    role,
    setAdmin,
    setClient,
    setDriver,
  } = useContext(RoleContext);

  const handleRoleAdmin = () => {
    setAdmin();
  };

  const handleRoleClient = () => {
    setClient();
  };

  const handleRoleDriver = () => {
    setDriver();
  };
  return (
    <div className="login">
      <h1 className="login__title">El usuario tiene rol {role}</h1>
      <div className="login__buttons">
        <button type="button" onClick={handleRoleAdmin}>Admin</button>
        <button type="button" onClick={handleRoleClient}>Client</button>
        <button type="button" onClick={handleRoleDriver}>Driver</button>
      </div>
    </div>
  );
}

export default Login;
