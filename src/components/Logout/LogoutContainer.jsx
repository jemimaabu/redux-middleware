import { connect } from "react-redux";
import { getState } from "../../store/selectors";
import { unauthUser } from "../../store/actions";
import { LogoutComponent } from "./Logout";

const mapStateToProps = () => ({
  state: getState(),
});

const mapDispatchToProps = {
  unauthUser,
};

export const LogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutComponent);
