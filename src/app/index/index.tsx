import { View, Text, ScrollView, Alert } from "react-native";
import { s } from "./styles";
import Ingredient from "@/components/Ingredient";
import { useEffect, useState } from "react";
import { Selected } from "@/components/Selected";
import { router } from "expo-router";
import { services } from "@/services";
import { Loading } from "@/components/Loading";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  useEffect(() => {
    services.ingredients
      .findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false));
  }, []);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  }

  function handleSearch() {
    router.navigate(`/recipes/${selected}`);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>
        Escolha {"\n"}
        <Text style={s.subtitle}>os produtos</Text>
      </Text>
      <Text style={s.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
      <ScrollView
        contentContainerStyle={s.ingredients}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            name={item.name}
            image={services.storage.imagePath + item.image}
            selected={selected.includes(item.id)}
            onPress={() => {
              handleToggleSelected(item.id);
            }}
          />
        ))}
      </ScrollView>
      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
