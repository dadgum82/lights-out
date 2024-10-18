// src/components/lights-out/button-rainbow.tsx
'use client'

import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"
import { ButtonRainbowProps } from "./types"

export const ButtonRainbow = ({
                                  isLit,
                                  row,
                                  col,
                                  onToggle,
                                  className = "",
                                  ...props
                              }: ButtonRainbowProps) => {
    const generateRandomColor = useCallback(() => {
        const getRandomValue = () => Math.floor(Math.random() * 256)
        let r, g, b
        do {
            r = getRandomValue()
            g = getRandomValue()
            b = getRandomValue()
        } while (Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30)
        return `rgb(${r}, ${g}, ${b})`
    }, [])

    const [randomColor] = useState(generateRandomColor())

    const buttonStyle = {
        backgroundColor: isLit ? randomColor : '#808080',
        color: 'white',
        transition: 'background-color 0.3s ease'
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        onToggle(row, col)
    }

    return (
        <Button
            className={`hover:opacity-90 ${className}`}
            style={buttonStyle}
            onClick={handleClick}
            {...props}
        />
    )
}