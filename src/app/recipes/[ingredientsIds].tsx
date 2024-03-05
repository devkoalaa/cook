import { Recipe } from "@/components/Recipe";
import { MaterialIcons } from "@expo/vector-icons";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { s } from "./styles";
import { Ingredients } from "@/components/Ingredients";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Loading } from "@/components/Loading";

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useLocalSearchParams<{ ingredientsIds: string }>();
  const ingredientsIds = params.ingredientsIds.split(",");

  useEffect(() => {
    services.ingredients
      .findByIds(ingredientsIds)
      .then((response) => setIngredients(response))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsIds)
      .then((response) => setRecipes(response))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={s.title}>Ingredientes</Text>
      </View>
      <Ingredients ingredients={ingredients} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Recipe
            recipe={item}
            onPress={() => router.navigate(`/recipe/${item.id}`)}
          />
        )}
        style={s.recipes}
        contentContainerStyle={s.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
      />
    </View>
  );
}
