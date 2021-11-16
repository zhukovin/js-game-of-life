
const canvas = document.getElementById('my-canvas');
const generationCounterField = document.getElementById('generation-count');
const ctx = canvas.getContext('2d');


const cellSize = 3
const fieldWidth = 300
const fieldHeight = 300

var cells = new Array(fieldWidth);
var generationCounter = 0

for (var x = 0; x < cells.length; x++) {
  cells[x] = new Array(fieldHeight);
}

function indicesInsideField(x, y) {
    return 0 <= x && x < fieldWidth && 0 <= y && y < fieldHeight
}

function setCell(x, y) {
    if (indicesInsideField(x, y)) cells[x][y] = true
}

function clearCell(x, y) {
    if (indicesInsideField(x, y)) cells[x][y] = false
}

function isCellSet(x, y) {
    if (indicesInsideField(x, y)) return cells[x][y] === true
    else return false
}

function isCellNotSet(x, y) {
    return !isCellSet(x, y)
}

function seedLife() {
    generationCounter = 0
    // pulsar
    // setCell(1, 0)
    // setCell(1, 1)
    // setCell(1, 2)
    // glider
    // setCell(20, 20)
    // setCell(21, 20)
    // setCell(22, 20)
    // setCell(20, 21)
    // setCell(21, 22)
    // die hard
    // setCell(50, 40)
    // setCell(51, 40)
    // setCell(51, 41)
    // setCell(55, 41)
    // setCell(56, 41)
    // setCell(57, 41)
    // setCell(56, 39)
    // const x = Math.trunc(fieldWidth/2+fieldWidth/6)
    // const y = fieldHeight/2
    // // acorn
    // setCell(x, y)
    // setCell(x+1, y)
    // setCell(x+4, y)
    // setCell(x+5, y)
    // setCell(x+6, y)
    // setCell(x+3, y-1)
    // setCell(x+1, y-2)
    // universe where 4 cells give birth to a new one
    // for (var i = 0; i < 20; i++) {

    //     setCell(x+i, y)
    // }

    // glider gun
    var x = 10
    const y = 10
    setCell(x+ 1, y+5)
    setCell(x+ 1, y+6)
    setCell(x+ 2, y+5)
    setCell(x+ 2, y+6)
    
    setCell(x+11, y+5)
    setCell(x+11, y+6)
    setCell(x+11, y+7)
    setCell(x+12, y+4)
    setCell(x+12, y+8)
    setCell(x+13, y+3)
    setCell(x+13, y+9)
    setCell(x+14, y+3)
    setCell(x+14, y+9)
    setCell(x+15, y+6)
    setCell(x+16, y+4)
    setCell(x+16, y+8)
    setCell(x+17, y+5)
    setCell(x+17, y+6)
    setCell(x+17, y+7)
    setCell(x+18, y+6)
    
    setCell(x+21, y+3)
    setCell(x+21, y+4)
    setCell(x+21, y+5)
    setCell(x+22, y+3)
    setCell(x+22, y+4)
    setCell(x+22, y+5)
    setCell(x+23, y+2)
    setCell(x+23, y+6)
    setCell(x+25, y+1)
    setCell(x+25, y+2)
    setCell(x+25, y+6)
    setCell(x+25, y+7)
    
    setCell(x+35, y+3)
    setCell(x+35, y+4)
    setCell(x+36, y+3)
    setCell(x+36, y+4)

    // glider gun 2
    var y_offset = 250
    // x += 4
    x += 9
    // x += 10
    // x += 11
    // x += 15 // symetrical explosions
    // x += 16
    setCell(x+ 1, y_offset-(y+5))
    setCell(x+ 1, y_offset-(y+6))
    setCell(x+ 2, y_offset-(y+5))
    setCell(x+ 2, y_offset-(y+6))
    setCell(x+11, y_offset-(y+5))
    setCell(x+11, y_offset-(y+6))
    setCell(x+11, y_offset-(y+7))
    setCell(x+12, y_offset-(y+4))
    setCell(x+12, y_offset-(y+8))
    setCell(x+13, y_offset-(y+3))
    setCell(x+13, y_offset-(y+9))
    setCell(x+14, y_offset-(y+3))
    setCell(x+14, y_offset-(y+9))
    setCell(x+15, y_offset-(y+6))
    setCell(x+16, y_offset-(y+4))
    setCell(x+16, y_offset-(y+8))
    setCell(x+17, y_offset-(y+5))
    setCell(x+17, y_offset-(y+6))
    setCell(x+17, y_offset-(y+7))
    setCell(x+18, y_offset-(y+6))
    setCell(x+21, y_offset-(y+3))
    setCell(x+21, y_offset-(y+4))
    setCell(x+21, y_offset-(y+5))
    setCell(x+22, y_offset-(y+3))
    setCell(x+22, y_offset-(y+4))
    setCell(x+22, y_offset-(y+5))
    setCell(x+23, y_offset-(y+2))
    setCell(x+23, y_offset-(y+6))
    setCell(x+25, y_offset-(y+1))
    setCell(x+25, y_offset-(y+2))
    setCell(x+25, y_offset-(y+6))
    setCell(x+25, y_offset-(y+7))
    setCell(x+35, y_offset-(y+3))
    setCell(x+35, y_offset-(y+4))
    setCell(x+36, y_offset-(y+3))
    setCell(x+36, y_offset-(y+4))

}

function drawField() {
    ctx.fillStyle = '#dcba73'
    ctx.strokeStyle = '#dcba73'
    ctx.clearRect(0, 0, fieldWidth*cellSize, fieldHeight*cellSize);
    ctx.strokeRect(0, 0, fieldWidth*cellSize, fieldHeight*cellSize);

    for (var x = 0; x < fieldWidth; x++) {
        for (var y = 0; y < fieldHeight; y++) {
            if (isCellSet(x, y)) {
                ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
            }
        }
    }
}

function numberOfSurroundingAliveCells(x, y) {
    var n = 0
    if (isCellSet(x-1, y-1)) n++
    if (isCellSet(x-1, y)) n++
    if (isCellSet(x-1, y+1)) n++
    if (isCellSet(x, y-1)) n++
    if (isCellSet(x, y+1)) n++
    if (isCellSet(x+1, y-1)) n++
    if (isCellSet(x+1, y)) n++
    if (isCellSet(x+1, y+1)) n++
    return n
}

function cellSurvives(x, y) {
    const n = numberOfSurroundingAliveCells(x, y)
    return (isCellSet(x, y) == true) && (n == 2 || n == 3)
    // return (isCellSet(x, y) == true) && (n == 2 || n == 3)
}

function cellComesToLife(x, y) {
    const n = numberOfSurroundingAliveCells(x, y)
    // return (isCellNotSet(x, y) == true) && (2 < n && n <7 )
    return (isCellNotSet(x, y) == true) && n == 3
}

function calculateNewState() {

    var row = new Array(fieldHeight)

    for (var y = 0; y < fieldHeight; y++) {
        if (cellSurvives(0, y) || cellComesToLife(0, y)) row[y] = true
    }

    for (var x = 1; x < fieldWidth; x++) {
        const row2 = new Array(fieldHeight) // do not allocate new row each time, reuse
        for (var y = 0; y < fieldHeight; y++) {
            if (cellSurvives(x, y) || cellComesToLife(x, y)) row2[y] = true
        }
        cells[x-1] = row
        row = row2
    }
    cells[x-1] = row

    generationCounter++
    generationCounterField.textContent = generationCounter
}

function fieldIsEmpty() {
    for (var x = 0; x < fieldWidth; x++) {
        for (var y = 0; y < fieldHeight; y++) {
            if (isCellSet(x, y)) return false
        }
    }
    return true
}

function runSimulation() {
    drawField()
    if (fieldIsEmpty()) return;
    calculateNewState()
    setTimeout(() => { runSimulation(); }, 1);
}

seedLife()
runSimulation()