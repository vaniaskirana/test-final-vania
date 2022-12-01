// import Logo from "/public/LogresAssets/img/logo.png";
import "/src/css/Logres.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { useDispatch } from "react-redux";
import { loginReducer } from "../../redux/loginReducer";
import axios from "axios";
import Footer from "../Footer";


const Login = () => {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const loginn = useSelector(state => state.login)

      // axios.get('https://testvoluntegreen.onrender.com/users')
      // .then(res => 
      // // setApiUser(res.data.data),
      // console.log(res.data.data)
      // )
      // .catch((err) => console.log(err))
  

  useEffect(()=>{
    if(cekEmail&&cekPassword){
      navigation(`/dashboard`)
    }else{
      navigation(`/`)
    }
  },[cekEmail])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const handleBtn = async (e) => {
    e.preventDefault()

    try {
      await axios.post('https://voluntegreen.onrender.com/signin', {
        email: email,
        password: password
      });
      localStorage.setItem("account", email);
      alert("Loading");

      // localStorage.setItem("pass", password);
      navigation("/dashboard");
    }catch(error){
      
        alert("Mohon Check kembali data Anda.");
      
    }

    // dispatch(loginReducer(email,password))

    // console.log("login bisa ga")
    // console.log({ email, password });
    // axios.get("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
     
    // })
    //   .then((result) => {
    //     if(email==""&& password==""){
    //       alert("masukkan email dan password anda");
    //     }
    //     result.data.forEach((element) => {
    //       if (element.email === email && element.password === password) {
    //         console.log("succes");
    //         navigation(`/dashboard`);
    //         localStorage.setItem("account", email);
    //         localStorage.setItem("pass", password);
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     alert(error, "Error");
    //   });
  };
  
  return (
    <>
    {cekEmail && cekPassword? (
      <HomePage/>
    ) : (
          <div className="container-xxxl">
          <div className="row" id="logre">
          <div className="col volunteelore">
            <h1 style={{textAlign: "center", paddingLeft: "4.6rem"}}>VolunteGreen</h1>
            {/* <img id="logre"  src="/LogresAssets/img/Mountain.jpg" /> */}
            </div>

              <div className="col">
                
                  <form id="form" style={{paddingLeft: "9rem"}}>
                    <br/><br/>
                    <h1 className="text-center">LOGIN</h1>
                    <div className="col">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-login"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="col">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password-login"
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                    <div className="text-center d-grid gap-2">
                      <br/>
                      <Link style={{ textDecoration: "none" }}><button
                      
                        type="submit"
                        className="btn btn-success"
                        // style="--bs-bg-opacity: 0.5"
                        id="btn-login"
                        onClick={handleBtn}
                      >
                        Submit
                      </button></Link>
                      <Link to={"/register"} style={{ textDecoration: "none" }}>
                        Belum punya akun?
                      </Link>
                    </div>
                  </form>
          
              </div>
          </div>
        </div>
    )}
    <Footer/>
    </>
  );
};
export default Login;