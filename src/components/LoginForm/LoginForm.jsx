import "./LoginForm.css";

function LoginForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signData = Object.fromEntries(formData);
    console.log(
      "🚀 ~ file: LoginForm.jsx:10 ~ handleSubmit ~ signData:",
      signData
    );
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
          <form className="sign-in-htm">
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
