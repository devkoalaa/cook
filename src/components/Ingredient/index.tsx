import { s } from "./styles";
import { Image, Pressable, PressableProps, Text } from "react-native";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export default function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {
  return (
    <Pressable style={[s.container, selected && s.selected]} {...rest}>
      <Image source={{ uri: image }} style={s.image} />
      <Text style={s.title}>{name}</Text>
    </Pressable>
  );
}
