import React from "react";
import Icon from "../Icon";

export default function ObjectStar(props) {
  return (
    <Icon {...props} glyphName="ObjectStar">
      <path
        d="M6.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,17.5 C18,17.7761424 17.7761424,18 17.5,18 L6.5,18 C6.22385763,18 6,17.7761424 6,17.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 Z M12.6605738,12.9926513 L14.3827421,14.444524 L15.2863014,12.8768099 L13.1471056,12.1045369 L15.2863014,11.3399869 L14.3827421,9.77227282 L12.6374049,11.2550369 L13.0544326,9 L11.2318687,9 L11.648896,11.2550368 L9.90355933,9.77227291 L9.00000004,11.3399869 L11.1391958,12.1045369 L9,12.8768099 L9.90355935,14.444524 L11.6257277,12.9926513 L11.2318687,15.2167969 L13.0544328,15.2167969 L12.6605738,12.9926513 Z"
        id="Object-*"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ObjectStar.displayName = "ObjectStar";
