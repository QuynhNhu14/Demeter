import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { useState, ChangeEvent, FormEvent } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
interface SignInFormState {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [state, setState] = useState<SignInFormState>({
    email: "",
    password: ""
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are logged in with email: ${email} and password: ${password}`);

    const initialState: SignInFormState = {
      email: "",
      password: ""
    };

    setState(initialState);
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <NavLink to="/home" style={{margin: '0'}}>
          <img src={logo} style={{width: '80px', height:'80px'}}/>
        </NavLink>
        <h1>Đăng nhập</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>hoặc sử dụng tài khoản của bạn</span>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Mật khẩu"
        />
        <a href="#">Quên mật khẩu?</a>
        <button>Đăng nhập</button>
      </form>
    </div>
  );
};

export default SignInForm;