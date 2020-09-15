import React from "react";

import * as R from "ramda";
import {
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Button,
  View,
} from "react-native";

import styles from "./styles";
import { filterNot } from "../../../utils";

import { IMultiPickerProps } from "./MultiPicker.props";

import CheckBox from "../../CheckBox";
import Screen from "../../Screen/screen";
import Icon from "../../Icon";

interface IState<T> {
  isPickerShown: boolean;
  data: T[];
}

class MultiPicker<T> extends React.PureComponent<
  IMultiPickerProps<T>,
  IState<T>
> {
  state = {
    isPickerShown: false,
    data: this.props.selectedData,
  };

  togglePicker = (): void =>
    this.setState((prevState) => ({ isPickerShown: !prevState.isPickerShown }));

  resetPicker = (): void =>
    this.setState({ data: this.props.selectedData, isPickerShown: false });

  addItems = (value: T): void =>
    this.setState((prevState) => ({ data: R.append(value, prevState.data) }));

  removeItems = (value: T): void =>
    this.setState((prevState) => ({ data: filterNot(value)(prevState.data) }));

  onItemPress = (value: T) => (): void => {
    if (!R.includes(value, this.state.data)) {
      this.addItems(value);
    } else {
      this.removeItems(value);
    }
  };

  onSubmit = (): void => {
    this.togglePicker();
    this.props.onValueChange(this.state.data);
  };

  public render() {
    const { isPickerShown } = this.state;
    const { data } = this.props;
    return (
      <Modal
        onRequestClose={this.togglePicker}
        animationType={"slide"}
        visible={isPickerShown}>
        <Screen statusBar={"dark-content"}>
          <TouchableOpacity
            onPress={this.resetPicker}
            style={styles.closeButtonContainer}>
            <Icon
              name={"plus"}
              size={20}
              style={{ transform: [{ rotate: "135deg" }] }}
            />
          </TouchableOpacity>
          <ScrollView>
            {data.map(({ label, value }, index) => (
              <TouchableOpacity
                key={`${label}_${index}`}
                onPress={this.onItemPress(value)}
                style={styles.rowContainer}>
                <CheckBox isChecked={R.includes(value, this.state.data)} />
                <Text style={styles.rowLabel}>{label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.submitContainer}>
            <Button title={"Submit"} onPress={this.onSubmit} />
          </View>
        </Screen>
      </Modal>
    );
  }
}

export default MultiPicker;
