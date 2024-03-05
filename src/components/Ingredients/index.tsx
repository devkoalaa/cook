import Ingredient, { IngredientsProps } from "@/components/Ingredient";
import { services } from "@/services";
import { ScrollView } from "react-native";
import { s } from "./styles";

type Props = {
  ingredients: IngredientsProps[];
};

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={s.container}
      contentContainerStyle={s.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  );
}
