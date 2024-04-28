import { player } from "./playerId";

const winningPatterns: number[][] = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]]
export function isWin(playerId: number): boolean {
    
    switch (playerId) {
        case 1:
            for (const pattern of winningPatterns) {
                let correctOrderCount: number = 0;
                for (const item of pattern) {
                    if (player.clicksOfP1.includes(item.toString())) {
                        correctOrderCount++;
                        if (correctOrderCount === 3) {
                            return true;
                        }
                    }
                }
            }
            break
        case 2:
            for (const pattern of winningPatterns) {
                let correctOrderCount: number = 0;
                for (const item of pattern) {
                    if (player.clicksOfP2.includes(item.toString())) {
                        correctOrderCount++;
                        if (correctOrderCount === 3) {
                            return true;
                        }
                    }
                }
            }
            break
    }
    return false


}