// import React from "react";

// const options ={
//   isActive: 'is-active',
//   isBlack: 'is-black',
//   isCentered: 'is-centered',
//   isDanger: 'is-danger',
//   isDark: 'is-dark',
//   isFocused: 'is-focused',
//   isGrouped: 'is-grouped',
//   isHovered: 'is-hovered',
//   isInfo: 'is-info',
//   isInverted: 'is-inverted',
//   isLarge: 'is-large',
//   isLight: 'is-light',
//   isLink: 'is-link',
//   isLoading: 'is-loading',
//   isMedium: 'is-medium',
//   isOutlined: 'is-outlined',
//   isPrimary: 'is-primary',
//   isRight: 'is-right',
//   isRounded: 'is-rounded',
//   isSelected: 'is-selected',
//   isSmall: 'is-small',
//   isStatic: 'is-static',
//   isSuccess: 'is-success',
//   isText: 'is-text',
//   isWarning: 'is-warning',
//   isWhite: 'is-white',
// }

// const colbutton = (props) => {

//   return (
//     <div>
//       <button class="button is-rounded my-class is-danger is-small">
//         Button 1
//       </button>
//       <button class="button is-small is-success">Button 2</button>
//     </div>
//   );
// };

// export default colbutton;

import React from "react";

const glossary = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white",
};

const CoolButton = (props) => {
  const keys = Object.keys(props);
  let extraClasses = "button ";
  keys.forEach((el) => {
    if (glossary[el]) extraClasses += `${glossary[el]} `;
  });
  if (props.className) extraClasses += props.className;

  return (
    <div>
      <button className={extraClasses}>{props.children}</button>
    </div>
  );
};

export default CoolButton;
