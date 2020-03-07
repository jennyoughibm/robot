import Movement from "./movement";
import {Pos,Direction} from './Pos';

export const moveToDest = (startMove : Movement) : Pos =>{

    let s = startMove.instruction;
    let variantVertical : number = 0;
    let variantHorizontal : number = 0;
    let currentpos : Direction = Direction.N;

    s.split('').forEach( c => {
        if (c === 'F'){
            switch(currentpos) {
                case Direction.N: {
                    variantVertical = variantVertical +1;
                    break;
                }
                case Direction.S: {
                    variantVertical = variantVertical - 1;
                    break;
                }
                case Direction.E: {
                    variantHorizontal = variantHorizontal -1;
                    break;
                }
                case Direction.W: {
                    variantHorizontal = variantHorizontal +1;
                    break;
                }
                default: {
                    variantVertical = variantVertical +1;
                    break;
                }
            }
        }
        if (c === 'B'){
            switch(currentpos) {
                case Direction.N: {
                    variantVertical = variantVertical +1;
                    break;
                }
                case Direction.S: {
                    variantVertical = variantVertical - 1;
                    break;
                }
                case Direction.E: {
                    variantHorizontal = variantHorizontal +1;
                    break;
                }
                case Direction.W: {
                    variantHorizontal = variantHorizontal -1;
                    break;
                }
                default: {
                    variantVertical = variantVertical +1;
                    break;
                }
            }
        }
        if (c === 'L'){
            switch(currentpos) {
                case Direction.N: {
                    currentpos = Direction.W;
                    variantHorizontal = variantHorizontal -1;
                    break;
                }
                case Direction.S: {
                    currentpos = Direction.E;
                    variantHorizontal = variantHorizontal +1;
                    break;
                }
                case Direction.E: {
                    currentpos = Direction.S;
                    variantVertical = variantVertical -1;
                    break;
                }
                case Direction.W: {
                    currentpos = Direction.N;
                    variantVertical = variantVertical +1;
                    break;
                }
                default: {
                    currentpos = Direction.W;
                    variantHorizontal = variantHorizontal -1;
                    break;
                }
            }
        }
        if (c === 'R'){
            switch(currentpos) {
                case Direction.N: {
                    currentpos = Direction.E;
                    variantHorizontal = variantHorizontal +1;
                    break;
                }
                case Direction.S: {
                    currentpos = Direction.W;
                    variantHorizontal = variantHorizontal -1;
                    break;
                }
                case Direction.E: {
                    currentpos = Direction.N;
                    variantVertical = variantVertical +1;
                    break;
                }
                case Direction.W: {
                    currentpos = Direction.S;
                    variantVertical = variantVertical -1;
                    break;
                }
                default: {
                    currentpos = Direction.E;
                    variantHorizontal = variantHorizontal +1;
                    break;
                }
            }
        }
    });

    const destX : number = parseInt(startMove.startX) + variantHorizontal;
    const destY : number = parseInt(startMove.startY) + variantVertical;

    const robotpos : Pos = {
        x: destX,
        y: destY,
        facing: currentpos
    };

    return robotpos;
};

