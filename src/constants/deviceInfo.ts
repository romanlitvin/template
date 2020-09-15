import { Dimensions, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

export const isIOS = Platform.OS === "ios";
export const isAndroid = !isIOS;

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

export default () => ({
  applicationVersion: `${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`,
  model: DeviceInfo.getModel(),
  manufacturer: DeviceInfo.getManufacturerSync(),
  platform: Platform.OS,
  os: DeviceInfo.getBaseOsSync(),
  mobileCarrier: DeviceInfo.getCarrierSync(),
  screenSize: `${DEVICE_WIDTH}X${DEVICE_HEIGHT.toFixed()}`,
  deviceId: DeviceInfo.getDeviceId(),
});
