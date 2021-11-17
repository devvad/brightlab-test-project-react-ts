import g from "../../images/g.svg"
import f from "../../images/f.svg"
import "./footer.css"

function Footer() {
  return (  
    <footer className="footer">
      <h2 className="footer__title">HomeCooks</h2>
      <h3 className="footer__subtitle">Choose your Log In method</h3>
      <button type="submit" className="footer__button footer__button_google"><img className="footer__icon" src={g} alt="Google" />Continue with Google</button>
      <button type="submit" className="footer__button footer__button_facebook"><img className="footer__icon" src={f} alt="Facebook" />Continue with Facebook</button>

      <div className="footer__choice">
        <div className="footer__line"></div>
        <div className="footer__or">or</div>
        <div className="footer__line"></div>
      </div>

      <div className="footer__text">continue with E-mail or phone number</div>
      
      <form className="footer__form">
        <label><b></b></label>
        <input className="footer__input" type="text" placeholder="Enter your e-mail or phone number" name="email" required />
        <label><b></b></label>
        <input className="footer__input footer__input_last" type="password" placeholder="Password" name="psw" required />
        <div className="footer__password">Forgot your password?</div>
      </form>
      
      <button type="submit" className="footer__button footer__button_log-in">Log in</button>
      <div className="footer__reg">Not a member yet? <span className="footer__reg_span">Sign Up</span></div>
      <button type="submit" className="footer__button footer__button_sign-up">Sign up</button>
    </footer>
  );
}

export default Footer