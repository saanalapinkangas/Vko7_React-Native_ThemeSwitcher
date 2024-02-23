import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
    return useContext(ThemeContext)
}