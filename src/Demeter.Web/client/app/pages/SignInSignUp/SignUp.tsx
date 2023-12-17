import Checkbox from "antd/es/checkbox";
import { useState, ChangeEvent, FormEvent } from "react";

interface SignUpFormState {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [state, setState] = useState<SignUpFormState>({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `You are signed up with name: ${name}, email: ${email}, and password: ${password}`
    );

    const initialState: SignUpFormState = {
      name: "",
      email: "",
      password: ""
    };

    setState(initialState);
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Tạo tài khoản</h1>
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
        <span>hoặc sử dụng email của bạn để đăng ký</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Tên tài khoản"
        />
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
        <Checkbox><span className="checkbox--text">Bạn muốn trở thành chủ cửa hàng</span></Checkbox>
        <button>Đăng ký</button>
      </form>
    </div>
  );
};

export default SignUpForm;