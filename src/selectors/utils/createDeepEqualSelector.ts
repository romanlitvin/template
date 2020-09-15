import { equals } from "ramda";
import { createSelectorCreator, defaultMemoize } from "reselect";

export default createSelectorCreator(defaultMemoize, equals);
