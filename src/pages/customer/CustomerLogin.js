import LoginForm from "../../components/LoginForm"

export default function customer_login() {
  return (
    <div>
      <LoginForm customer = 'true' link = "/dashboard" recovery = "/recovery"></LoginForm>
    </div>
  );
}

