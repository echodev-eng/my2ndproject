import { Button as RACButton, composeRenderProps, type ButtonProps } from 'react-aria-components'
import './Button.css'

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className) =>
        className ? `button ${className}` : 'button',
      )}
    />
  )
}
