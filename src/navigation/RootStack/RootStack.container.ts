import { connect } from "react-redux";

import { IAppStateReducer } from "../../reducers/appState.props";

import * as s from "../../selectors/auth/auth.selector";

const mapStateToProps = (state: IAppStateReducer) => ({
  isLoggedIn: s.getIsCustomerLoggedIn(state),
});

export default connect(mapStateToProps);
