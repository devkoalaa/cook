import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { s } from "./styles";

type Props = TouchableOpacityProps & {
  recipe: {
    name: string;
    image: string;
    minutes: number;
  };
};

export function Recipe({ recipe, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.8} {...rest}>
      <ImageBackground source={{ uri: recipe.image }} style={s.image}>
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "#000"]}
          style={s.linear}
        >
          <Text style={s.title} numberOfLines={1} lineBreakMode="tail">
            {recipe.name}
          </Text>
          <Text style={s.minutes} numberOfLines={1} lineBreakMode="tail">
            {recipe.minutes} minutos
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
