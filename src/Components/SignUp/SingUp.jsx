import useForm from "../FormInput/useForm.js";

import FormInput from "../FormInput/FormInput.jsx";
import Btn from "../../Ingredients/Btn/Btn.jsx";
import FacebookBtn from "../../Ingredients/Btn/FacebookBtn.jsx";

import "./SignUp.scss";

const SignUp = ({ toggleModal }) => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className="sign-up">
      <h2 className="title">Înregistrează-te</h2>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          id="displayName"
          value={values.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <div className="btns-group">
          <Btn type="submit" buttonStyle={"btn--secondary--ghost"}>
            Înregistrează-te
          </Btn>
          <span>Sau</span>
          <FacebookBtn>Continuă cu Google</FacebookBtn>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
