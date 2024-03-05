import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { s } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[s.button]} {...rest}>
      <Text style={[s.text]}>{title}</Text>
    </TouchableOpacity>
  )
}
