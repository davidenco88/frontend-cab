import './LoginForm.css';

function LoginForm() {
  return (
    <div className="c-loginForm">
      <div className="loginForm">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label htmlFor="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="pass" className="label">Email Address</label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
              <h4 className='rol-header'>Would you like to sign in as?</h4>

              <div className='user-rol'>
                <label htmlFor="check-client">
                  <input id='check-client' type="radio" name='user-rol' /> CLIENT
                </label>
                <label htmlFor="check-driver">
                  <input id='check-driver' type="radio" name='user-rol' /> DRIVER
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
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="first-name" className="label">First Name</label>
              <input id="first-name" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="last-name" className="label">Last Name</label>
              <input id="last-name" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Email Address</label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Repeat Password</label>
              <input id="pass" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
