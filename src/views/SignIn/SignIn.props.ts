import { IRootNavScreenProps } from "../../navigation/RootStack/RootStack.props";
import { mapDispatchToProps } from "./SignIn.container";

type TDispatchToProps = ReturnType<typeof mapDispatchToProps>;

export type TSignInProps = TDispatchToProps & IRootNavScreenProps<"SignIn">;
