import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
        <div className="login-box">
          <h1>Sign In</h1>
          <div className="email-box">
            <span>E-mail</span>
            <input type="email" id="emailId" />
          </div>
          <div className="email-box">
            <span>Password</span>
            <input type="password" id="password" />
          </div>
          <button type="submit">Sign In</button>
          <small>
            By signing-in you agree to Amazon's Condition of Use & Sale. Please
            see our Privacy Notice, Our Cookies Notice and our interest-Based
            Ads Notice
          </small>
          <button type="submit">Create your Amazon Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
