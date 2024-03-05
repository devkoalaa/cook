import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated";
import { s } from "./styles";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Button } from "../Button";

type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View
      style={s.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={s.header}>
        <Text style={s.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
