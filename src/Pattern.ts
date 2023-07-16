// 左右対称のパターンを生成
function Generate(division: number): boolean[][] {
    const matrix: boolean[][] = [];

    for (let row = 0; row < division; row++) {
        matrix[row] = new Array(division).fill(false);
    }

    const center = division % 2 === 0? division / 2 : Math.floor(division / 2) + 1

    for(let row = 0; row < division; row++){
        for(let col = 0; col < center; col++){
            const cellBool = Math.random() > 0.5? true : false;
            matrix[row][col] = cellBool;
            matrix[row][(division - 1) - col] = cellBool;
        }
    }
    return matrix
}

export default Generate;