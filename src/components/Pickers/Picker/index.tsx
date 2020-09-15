import React from "react";

import { Modal, TouchableOpacity, View } from "react-native";
import { Picker as RNPicker } from "@react-native-community/picker";

import { IPickerProps } from "./Picker.props";
import styles from "./styles";

interface IState {
  isPickerShown: boolean;
}

class Picker<T extends string | number> extends React.PureComponent<
  IPickerProps<T>,
  IState
> {
  state = {
    isPickerShown: false,
  };

  togglePicker = (): void =>
    this.setState((prevState) => ({ isPickerShown: !prevState.isPickerShown }));

  public render() {
    const { isPickerShown } = this.state;
    const { onValueChange, value, data } = this.props;
    return (
      <Modal
        onRequestClose={this.togglePicker}
        transparent
        animationType={"slide"}
        visible={isPickerShown}>
        <View style={styles.pickerContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.togglePicker}
            style={styles.backdrop}
          />
          <RNPicker
            selectedValue={value}
            onValueChange={onValueChange}
            style={styles.picker}>
            {data.map(({ value: pickerValue, label }) => (
              <RNPicker.Item key={label} label={label} value={pickerValue} />
            ))}
          </RNPicker>
        </View>
      </Modal>
    );
  }
}

export default Picker;
