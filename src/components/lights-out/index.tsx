// src/components/lights-out/index.tsx
'use client'

import { useState, useCallback } from 'react'
import { Header } from './header'
import { GameBoard } from './game-board'
import { Footer } from './footer'

export const LightsOut = () => {
    const initializeBoard = (allLit?: boolean) => {
        if (allLit === true) {
            return Array(5).fill(null).map(() => Array(5).fill(true))
        }
        if (allLit === false) {
            return Array(5).fill(null).map(() => Array(5).fill(false))
        }
        return Array(5).fill(null).map(() =>
            Array(5).fill(null).map(() => Math.random() < 0.5)
        )
    }

    const [board, setBoard] = useState(initializeBoard())
    const [moves, setMoves] = useState(0)

    const toggleLights = useCallback((row: number, col: number) => {
        setBoard(prevBoard => {
            const newBoard = prevBoard.map(row => [...row])

            // Toggle clicked button and adjacent buttons
            newBoard[row][col] = !newBoard[row][col]
            if (row > 0) newBoard[row-1][col] = !newBoard[row-1][col]
            if (row < 4) newBoard[row+1][col] = !newBoard[row+1][col]
            if (col > 0) newBoard[row][col-1] = !newBoard[row][col-1]
            if (col < 4) newBoard[row][col+1] = !newBoard[row][col+1]

            return newBoard
        })
        setMoves(prev => prev + 1)
    }, [])

    const handleLightsOn = () => {
        setBoard(initializeBoard(true))
        setMoves(0)
    }

    const handleLightsOff = () => {
        setBoard(initializeBoard(false))
        setMoves(0)
    }

    const handleReset = () => {
        setBoard(initializeBoard())
        setMoves(0)
    }

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <Header />
            <GameBoard
                board={board}
                onToggle={toggleLights}
            />
            <Footer
                moves={moves}
                onLightsOn={handleLightsOn}
                onLightsOff={handleLightsOff}
                onReset={handleReset}
            />
        </div>
    )
}