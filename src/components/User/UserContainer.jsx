import { connect } from "react-redux";
import { getState } from "../../store/selectors";
import { unauthUser } from "../../store/actions";
import { UserComponent } from "./User";

const mapStateToProps = () => ({
  state: getState(),
});

const mapDispatchToProps = {
  unauthUser,
};

export const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);
