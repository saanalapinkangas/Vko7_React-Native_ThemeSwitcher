import { View, Text } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper'
import { useTheme } from '../context/useTheme'
import Styles from '../Styles'

export default function ThemeSwitchButton() {
    const {isDarkMode, toggleDarkMode} = useTheme()

    return (
        <View style={Styles.switch}>
        <Text style={isDarkMode ? Styles.dark : Styles.light}>Change screen mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
    )
}