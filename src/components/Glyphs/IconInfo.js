import React from "react"
import Icon from "../Icon";

export default function Info(props) {
  return (
    <Icon {...props} glyphName="Info">
      <path
        d="M12,21.25 C6.89136604,21.25 2.74999996,17.108634 2.74999996,12 C2.74999996,6.89136604 6.89136604,2.74999996 12,2.74999996 C17.108634,2.74999996 21.25,6.89136604 21.25,12 C21.25,17.108634 17.108634,21.25 12,21.25 Z M12,19.75 C16.2802068,19.75 19.75,16.2802068 19.75,12 C19.75,7.71979317 16.2802068,4.24999997 12,4.24999997 C7.71979317,4.24999997 4.24999997,7.71979317 4.24999997,12 C4.24999997,16.2802068 7.71979317,19.75 12,19.75 Z M12.75,17 L11.25,17 L11.25,9.99999999 L12.75,9.99999999 L12.75,17 Z M12,8.99999999 C11.45,8.99999999 11,8.54999999 11,7.99999998 C11,7.44999998 11.45,6.99999998 12,6.99999998 C12.55,6.99999998 13,7.44999998 13,7.99999998 C13,8.54999999 12.55,8.99999999 12,8.99999999 Z"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

Info.displayName = "Info";