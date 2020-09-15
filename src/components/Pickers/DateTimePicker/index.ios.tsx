import React from "react";

import { TouchableOpacity, View, Modal } from "react-native";
import DatePicker from "@react-native-community/datetimepicker";

import styles from "./styles";
import { getColor } from "../../../theme";

import { IDateTimePickerProps } from "./DateTimePicker.props";

interface IState {
  visible: boolean;
}

class DateTimePicker extends React.Component<IDateTimePickerProps, IState> {
  state = {
    visible: false,
  };

  public shouldComponentUpdate(
    nextProps: Readonly<IDateTimePickerProps>,
    nextState: Readonly<IState>,
  ): boolean {
    if (nextProps.value !== this.props.value) {
      return true;
    }
    if (nextState.visible !== this.state.visible) {
      return true;
    }
    return false;
  }

  togglePicker = (): void =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  public render() {
    const { mode, value, onPickerChange } = this.props;
    const { visible } = this.state;
    return (
      <Modal
        animationType={"slide"}
        transparent
        visible={visible}
        onRequestClose={this.togglePicker}>
        <View style={styles.pickerContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.togglePicker}
            style={styles.backdrop}
          />
          <DatePicker
            textColor={getColor("black")}
            mode={mode}
            value={value}
            style={styles.picker}
            onChange={onPickerChange}
          />
        </View>
      </Modal>
    );
  }
}

export default DateTimePicker;
