import { GameBoardProps } from "./types"
import { ButtonRainbow } from "./button-rainbow"

export const GameBoard = ({ board, onToggle }: GameBoardProps) => {
    return (
        <div className="grid grid-cols-5 gap-4 w-fit mx-auto">
            {board.map((row, rowIndex) => (
                row.map((isLit, colIndex) => (
                    <ButtonRainbow
                        key={`${rowIndex}-${colIndex}`}
                        isLit={isLit}
                        row={rowIndex}
                        col={colIndex}
                        onToggle={onToggle}
                        className="w-16 h-16"
                    />
                ))
            ))}
        </div>
    )
}