function checkBorderCollision(snakePosition, gridDimensions){
    const headPosition = snakePosition[snakePosition.length - 1];
    if (headPosition > gridDimensions * gridDimensions || headPosition < 0){
        return false;
    }
    const beforeHeadPosition = snakePosition[snakePosition.length - 2];

    if (
        headPosition % gridDimensions !== 0 &&
        beforeHeadPosition % gridDimensions == 0 &&
        headPosition < beforeHeadPosition
    ){
        return false;
    }

    if (
        headPosition % gridDimensions == 0 &&
        beforeHeadPosition % gridDimensions !== 0 &&
        headPosition > beforeHeadPosition
    ){
        return false;
    }
    return true;
}

function checkSelfCollision(snakePosition) {
        const headPosition = snakePosition[snakePosition.length - 1];
        for (let i = 0; i < snakePosition.length - 1; i++){
            if (headPosition === snakePosition[i]){
                return false;
            }
        }
        return true;
}

function checkCollision(snakePosition, gridDimensions){
    return checkBorderCollision(snakePosition, gridDimensions)&&
    checkSelfCollision(snakePosition);
}

export default checkCollision;