import "./Login.css";
import NavBar from "../../components/NavBar.component";
import Footer from "../../components/Footer.component";
export default function Login() {
  return (
    <>
      <NavBar />
      <div className="container-login">
        <div className="card-login">
          <h3>Form Login</h3>
          <form>
            <div className="input-group">
              <label>User Name</label>
              <input type="text" name="username" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <button className="btn-login" type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}