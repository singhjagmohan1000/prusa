import { SET_ADDRESS } from "../constants/index";
import { SET_RADIO_NAME } from "../constants/index";
export function setRadioName() {
  return { type: SET_RADIO_NAME, radio_name: "Punjabi Radio USA" };
}

export function setAddress() {
  return {
    type: SET_ADDRESS,
    address: {
      street: "3750 McKee Road, STE B,",
      city: "San Jose,",
      state: "CA "
    }
  };
}
