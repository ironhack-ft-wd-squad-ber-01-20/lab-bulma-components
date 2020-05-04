import React, { Fragment } from "react";

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

const Message = (props) => {
  let extraClasses = "message ";
  keys.forEach((el) => {
    if (glossary[el]) extraClasses += `${glossary[el]} `;
  });
  if (props.className) extraClasses += props.className;

  return (
    <Fragment>
      <article className={extraClasses}>
        <div className="message-header">
          <p>{props.title}</p>
        </div>
        <div className="message-body">{props.children}</div>
      </article>
    </Fragment>
  );
};
export default Message;
