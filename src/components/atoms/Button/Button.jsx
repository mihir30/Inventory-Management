import React from 'react'

export default function Button({
  children,
  buttonType = "",
  method, 
  ...props
}) {
  return (
    <button className={buttonType} onClick={method} {...props}>
      {children}
    </button>
  );
}