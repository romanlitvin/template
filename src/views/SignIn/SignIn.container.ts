import { connect } from "react-redux";
import { Dispatch } from "redux";

import * as actions from "../../actions/auth";
import { TSignInCredentials } from "../../types";

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (payload: TSignInCredentials) => dispatch(actions.signIn(payload)),
});

export default connect(null, mapDispatchToProps);
