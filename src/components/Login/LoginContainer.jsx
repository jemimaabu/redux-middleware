import { connect } from "react-redux";
import { authUser } from "../../store/actions";
import { getState } from "../../store/selectors";
import { LoginComponent } from "./Login";

const mapStateToProps = () => ({
  state: getState(),
});

const mapDispatchToProps = {
  authUser,
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
