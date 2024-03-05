import { Text, View } from "react-native"

import { s } from "./styles"

type Props = {
  step: number
  description: string
}

export function Step({ step, description }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.step}>{step}</Text>

      <Text style={s.description}>{description}</Text>
    </View>
  )
}
