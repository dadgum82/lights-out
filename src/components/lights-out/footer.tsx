import { Button } from "@/components/ui/button"
import { FooterProps } from "./types"

export const Footer = ({ moves, onLightsOn, onLightsOff, onReset }: FooterProps) => {
    return (
        <div className="mt-8 text-center">
            <p className="mb-4">Moves: {moves}</p>
            <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={onLightsOn}>
                    Lights On
                </Button>
                <Button variant="outline" onClick={onLightsOff}>
                    Lights Off
                </Button>
                <Button variant="outline" onClick={onReset}>
                    Reset
                </Button>
            </div>
        </div>
    )
}