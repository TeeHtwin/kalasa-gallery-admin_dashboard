import React from 'react';
import Popup from '../../../components/dialog/Popup';

type Props = {};

export default function PopupTest({}: Props) {
  return (
    <Popup
      trigger="view"
      name="Hnin Cherry"
      gmail="yukisaku1023@gmail.com"
      phonenumber="09250720776"
      description="Can you contact me back !!"
    ></Popup>
  );
}
