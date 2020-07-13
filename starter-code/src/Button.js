import React from 'react'

export default function Button() {
    return (
        <div>
            <CoolButton isSmall isDanger className="is-rounded my-class">{props.className}</CoolButton>
            <CoolButton isSmall isSuccess>Sign Up</CoolButton>
        </div>
    )
}
