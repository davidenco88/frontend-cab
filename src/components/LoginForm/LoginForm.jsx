import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signInData = Object.fromEntries(formData);

    const loginPayload = await login(signInData);
    const savedToken = console.log(
      "🚀 ~ file: LoginForm.jsx:12 ~ handleSubmit ~ loginPayload:",
      loginPayload
    );

    //como la propiedad status solo existe cuando falla entonces solo salta
    //cuando hay error
    if (loginPayload.status) {
      //ACA PODRIA IMPLEMENTARSE UN USESTATE CON UN BOOLEANO
      //CUANDO SEA TRUE ENTONCES APARECE UN COMPONENTE QUE DICE EL
      //MENSAJE ENVIADO DESDE EL BACKEND CON EL ERROR
      //ASI FUNCIONARIA CON DIFERENTES MENSAJES Y VARIAS PAGS
      return alert("Incorrect email or password, try again.");
    }
    localStorage.setItem("authToken", loginPayload.token);
    localStorage.setItem("profile", JSON.stringify(loginPayload.profile));

    navigate("/");
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
          <form className="sign-in-htm" onSubmit={handleSubmit}>
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
              <h4 className="rol-header">Would you like to sign in as?</h4>
              <div className="user-rol">
                <label htmlFor="check-client-signIn">
                  <input
                    id="check-client-signIn"
                    type="radio"
                    name="singin-rol"
                    defaultChecked
                  />{" "}
                  CLIENT
                </label>
                <label htmlFor="check-driver-signIn">
                  <input
                    id="check-driver-signIn"
                    type="radio"
                    name="singin-rol"
                  />{" "}
                  DRIVER
                </label>
              </div>
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign In" />
            </div>
            <div className="hr" />
            <div className="foot-lnk">
              <a href="#">Olvide mi contraseña</a>
            </div>
          </form>

          <form className="sign-up-htm">
            <div className="group">
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input id="first-name" type="text" className="input" required />
            </div>
            <div className="group">
              <label htmlFor="last-name" className="label">
                Last Name
              </label>
              <input id="last-name" type="text" className="input" required />
            </div>
            <div className="group">
              <label htmlFor="email-signUp" className="label">
                Email Address
              </label>
              <input id="email-signUp" type="text" className="input" required />
            </div>
            <div className="group">
              <label htmlFor="password-signUp" className="label">
                Password
              </label>
              <input
                id="password-signUp"
                type="password"
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
                    name="user-rol"
                    defaultChecked
                  />{" "}
                  CLIENT
                </label>
                <label htmlFor="check-driver">
                  <input id="check-driver" type="radio" name="user-rol" />{" "}
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
