export type ToggleEventHandler = (row: number, col: number) => void

export interface ButtonRainbowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLit: boolean
    row: number
    col: number
    onToggle: ToggleEventHandler
}

class ButtonRainbowPropsImpl implements ButtonRainbowProps {
}

export interface GameBoardProps {
    board: boolean[][]
    onToggle: ToggleEventHandler
}

export interface FooterProps {
    moves: number
    onLightsOn: () => void
    onLightsOff: () => void
    onReset: () => void
}