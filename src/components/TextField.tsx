import {
  FieldError,
  Input,
  Label,
  Text,
  TextField as RACTextField,
  composeRenderProps,
  type TextFieldProps as RACTextFieldProps,
  type ValidationResult,
} from 'react-aria-components'
import './TextField.css'

export interface TextFieldProps extends RACTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

export function TextField({ label, description, errorMessage, placeholder, ...props }: TextFieldProps) {
  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className) =>
        className ? `text-field ${className}` : 'text-field',
      )}
    >
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  )
}
