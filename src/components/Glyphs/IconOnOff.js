import React from "react"
import Icon from "../Icon";

export default function OnOff(props) {
  return (
    <Icon {...props} glyphName="OnOff">
      <path
        d="M11.25,2.99999996 C11.25,2.5857864 11.5857864,2.24999996 12,2.24999996 C12.4142136,2.24999996 12.75,2.5857864 12.75,2.99999996 L12.75,9.99999999 C12.75,10.4142136 12.4142136,10.75 12,10.75 C11.5857864,10.75 11.25,10.4142136 11.25,9.99999999 L11.25,2.99999996 Z M9.06510669,4.7052665 C9.4493391,4.55054633 9.88624649,4.73660276 10.0409667,5.12083517 C10.1956868,5.50506759 10.0096304,5.94197498 9.62539799,6.09669515 C7.23654353,7.05862328 5.63888886,9.38073027 5.63888886,12 C5.63888886,15.5131447 8.48685533,18.3611111 12,18.3611111 C15.5131447,18.3611111 18.3611111,15.5131447 18.3611111,12 C18.3611111,9.38729691 16.7714723,7.06985623 14.3914635,6.10351308 C14.0076784,5.94768671 13.8228813,5.51024517 13.9787077,5.12646005 C14.134534,4.74267492 14.5719756,4.55787784 14.9557607,4.71370421 C17.8967375,5.9078144 19.8611111,8.77155891 19.8611111,12 C19.8611111,16.3415718 16.3415718,19.8611111 12,19.8611111 C7.6584282,19.8611111 4.13888886,16.3415718 4.13888886,12 C4.13888886,8.76343259 6.11315665,5.89393824 9.06510669,4.7052665 Z"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

OnOff.displayName = "OnOff";