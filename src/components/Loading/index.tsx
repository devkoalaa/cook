import { ActivityIndicator } from "react-native"

import { s } from "./styles"
import { theme } from "@/theme"

export function Loading() {
  return (
    <ActivityIndicator
      style={s.container}
      color={theme.colors.green_600}
    />
  )
}
