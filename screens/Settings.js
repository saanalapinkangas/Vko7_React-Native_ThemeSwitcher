import { View, Text } from 'react-native'
import React from 'react'
import ThemeSwitchButton from '../components/ThemeSwitchButton'
import { useTheme } from '../context/useTheme'
import Styles from '../Styles'

export default function Settings() {
    const {isDarkMode} = useTheme()

    return (
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton/>
        </View>
    )
}