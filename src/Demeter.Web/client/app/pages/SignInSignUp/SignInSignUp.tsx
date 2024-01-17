import { useState } from "react";
import "./SignInSignUp.css";
import "../../components/Navbar/Navbar.module.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import Navbar from "../../components/Navbar/NavbarTwo";
import { Flex } from "antd";
import { NavLink } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { relative } from "path";

const SignInSignUp: React.FC = () =>  {
  const [type, setType] = useState<"signIn" | "signUp">("signIn");

  const handleOnClick = (text: "signIn" | "signUp") => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = `container ${type === "signUp" ? "right-panel-active" : ""}`;

  return (
    <div className="LoginPage" style={{marginTop: '0'}}>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${type === "signUp" ? "" : "hidden"}`}>
              <Flex justify='flex-start' style={{width: '100%', position: 'absolute', top: '10px', left: '20px'}}>
                <NavLink to="/home" style={{margin: '0'}}>
                  <HomeOutlined style={{color: '#f3f4f6', fontSize: '18px', marginRight: '10px'}}/>
                  <span style={{color: '#f3f4f6', fontSize: '18px', textDecoration: 'underline'}}>Trang chủ</span>
                </NavLink>
              </Flex>
              <h1>Chào mừng trở lại!</h1>
              <p>Để giữ kể nối với chúng tôi vui lòng điền thông tin cá nhân của bạn</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Đăng nhập
              </button>
            </div>
            <div className={`overlay-panel overlay-right ${type === "signUp" ? "hidden" : ""}`}>
              <Flex justify='flex-start' style={{width: '100%', position: 'absolute', top: '10px', left: '20px'}}>
                <NavLink to="/home" style={{margin: '0'}}>
                  <HomeOutlined style={{color: '#f3f4f6', fontSize: '18px', marginRight: '10px'}}/>
                  <span style={{color: '#f3f4f6', fontSize: '18px', textDecoration: 'underline'}}>Trang chủ</span>
                </NavLink>
              </Flex>
              <h1>Chào bạn!</h1>
              <p>Nhập thông tin cá nhân và bắt đầu trải nghiệm</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInSignUp;