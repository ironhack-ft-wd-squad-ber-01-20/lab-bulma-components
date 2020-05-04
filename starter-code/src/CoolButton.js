import React, { Fragment } from 'react'



const CoolButton = (props) => {
    console.log(props)
    let buttons = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
      }
   let newClass = "button "
for (const key in buttons) {
    if (buttons.hasOwnProperty(key)) {
        if(props.hasOwnProperty(key)){
            newClass += ` ${buttons[key]} `
        }
    }
}
if(props.className){
    newClass += props.className
}
  return (
      <Fragment>
        <button className={newClass}>{props.children}</button>
        </Fragment>
    )
}

export default CoolButton;