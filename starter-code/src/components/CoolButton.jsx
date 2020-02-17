import React from 'react'

export const CoolButton = (props) => {

    // console.log({...props})
    let classNameResult = `button ${props.className ? props.className: ''} `;

    const classesObj = {
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


     Object.keys(props).forEach((value, index)=>{
         if(value){
            classNameResult += classesObj[value]+" ";
         }
          
     })
    
    return (
        <div>
            <button className={classNameResult} >{props.children}</button>
        </div>
    )
}
