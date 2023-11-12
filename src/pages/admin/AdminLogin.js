import LoginForm from "../../components/LoginForm"

export default function AdminLogin() {
  return (
    <div>
    <LoginForm title = "Admin Portal" link = "/admin_dashboard" recovery = "/admin_recovery"></LoginForm>
  </div>
  );
}
