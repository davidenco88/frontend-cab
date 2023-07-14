import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { login, register } from '../../services/auth';
import { useDispatch } from '../../Context';
import { SET_TRIP } from '../../Context/actionTypes';
import './LoginForm.scss';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmitSignIn(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signInData = Object.fromEntries(formData);

    const loginPayload = await login(signInData);

    if (loginPayload.status === 404) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: loginPayload.message,
      });
    }

    if (loginPayload.status === 401) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: loginPayload.message,
      });
    }

    if (loginPayload.status === 400) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: loginPayload.message,
      });
    }
    localStorage.setItem('authToken', loginPayload.token);
    localStorage.setItem('profile', JSON.stringify(loginPayload.profile));
    const profile = JSON.parse(localStorage.getItem('profile'));

    dispatch({ type: SET_TRIP, payload: { clientID: profile.id } });

    navigate('/');
  }

  async function handleSubmitSignUp(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signUpData = Object.fromEntries(formData);

    const createUserData = {
      name: signUpData.name,
      lastname: signUpData.lastname,
      email: signUpData.email,
      password: signUpData.password,
      rol_id: [],
    };

    if (signUpData.userRol === 'Client') {
      createUserData.rol_id.push(2);
    }
    if (signUpData.userRol === 'Driver') {
      createUserData.rol_id.push(3);
    }

    const response = await register(createUserData);

    if (response.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Registration successful',
        text: 'We have sent you an email with a link to verify your account. Please check your inbox.',
      });

      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Registration failed',
        text: 'Something went wrong. Please try again.',
      });
    }
  }

  return (
    <div className="c-loginForm">
      <div className="loginForm">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          defaultChecked
        />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <form className="sign-in-htm" onSubmit={handleSubmitSignIn}>
            <div className="group">
              <label htmlFor="email" className="label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="input"
                data-type="password"
                required
              />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign In" />
            </div>
            <div className="hr" />
            <div className="foot-lnk">
              <a href="#">Olvide mi contraseña</a>
            </div>
          </form>

          <form className="sign-up-htm" onSubmit={handleSubmitSignUp}>
            <div className="group">
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                name="name"
                className="input"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="last-name" className="label">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                name="lastname"
                className="input"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="email-signUp" className="label">
                Email Address
              </label>
              <input
                id="email-signUp"
                type="text"
                name="email"
                className="input"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="password-signUp" className="label">
                Password
              </label>
              <input
                id="password-signUp"
                type="password"
                name="password"
                className="input"
                data-type="password"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="password-signUp-rep" className="label">
                Repeat Password
              </label>
              <input
                id="password-signUp-rep"
                type="password"
                name="validationPassword"
                className="input"
                data-type="password"
                required
              />
            </div>
            <div className="group">
              <h4 className="rol-header">Would you like to sign up as?</h4>
              <div className="user-rol">
                <label htmlFor="check-client">
                  <input
                    id="check-client"
                    type="radio"
                    name="userRol"
                    value="Client"
                    defaultChecked
                  />{' '}
                  CLIENT
                </label>
                <label htmlFor="check-driver">
                  <input
                    id="check-driver"
                    type="radio"
                    name="userRol"
                    value="Driver"
                  />{' '}
                  DRIVER
                </label>
              </div>
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
