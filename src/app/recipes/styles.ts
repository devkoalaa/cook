import { theme } from "@/theme"
import { fonts } from "@/theme/fonts"
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 32,
        paddingTop: 62,
        marginBottom: 12,
    },
    title: {
        fontSize: theme.fonts.size.heading.md,
        fontFamily: fonts.family.bold,
        marginTop: 22,
    },
    recipes: {
        padding: 32,
    },
    recipesContent: {
        gap: 16,
    },
})