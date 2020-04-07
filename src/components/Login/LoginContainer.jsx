import { connect } from "react-redux";
import { authUser } from "../../store/actions";
import { LoginComponent } from "./Login";

const mapDispatchToProps = {
  authUser,
};

export const LoginContainer = connect(null, mapDispatchToProps)(LoginComponent);
