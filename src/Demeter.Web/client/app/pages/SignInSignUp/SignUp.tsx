import { Checkbox } from "@mantine/core";
import { useState, ChangeEvent, FormEvent } from "react";

interface SignUpFormState {
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone: string;
  address: string;
}

const SignUpForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const [state, setState] = useState<SignUpFormState>({
    username: "",
    email: "",
    password: "",
    fullname: "",
    phone: "",
    address: "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmitStep1 = (evt: FormEvent) => {
    evt.preventDefault();
    console.log("step1");
    const { username, email, password } = state;
  };

  const handleOnSubmitStep2 = (evt: FormEvent) => {
    evt.preventDefault();
    console.log("step2");

    const { fullname, phone, address } = state;
    alert(`Sign up successfully!`);
    const initialState: SignUpFormState = {
      username: "",
      email: "",
      password: "",
      fullname: "",
      phone: "",
      address: "",
    };

    setState(initialState);
  };

  return (
    <div className="form-container sign-up-container">
      {step === 1 ? (
        <form onSubmit={handleOnSubmitStep1}>
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
            name="username"
            value={state.username}
            onChange={handleChange}
            placeholder="Tên đăng nhập"
            required
          />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Mật khẩu"
            required
          />
          <button onClick={() => setStep(2)}>Tiếp tục</button>
        </form>
      ) : (
        <form onSubmit={handleOnSubmitStep2}>
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
          <span
            className="BackButton"
            style={{ textDecoration: "underline" }}
            onClick={() => setStep(1)}
          >
            Quay lại
          </span>
          <input
            type="text"
            name="fullname"
            value={state.fullname}
            onChange={handleChange}
            placeholder="Họ và Tên"
            required
          />
          <input
            type="tel"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            pattern="[0-9]{10}"
            required
          />
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
            placeholder="Địa chỉ"
            required
          />
          <Checkbox onChange={console.log}>
            Bạn muốn ở thành chủ cửa hàng?
          </Checkbox>
          <button onClick={() => setStep(0)}>Đăng ký</button>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;
