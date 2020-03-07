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
                    break;
                }
                case Direction.S: {
                    currentpos = Direction.E;
                    break;
                }
                case Direction.E: {
                    currentpos = Direction.S;
                    break;
                }
                case Direction.W: {
                    currentpos = Direction.N;
                    break;
                }
                default: {
                    currentpos = Direction.W;
                    break;
                }
            }
        }
        if (c === 'R'){
            switch(currentpos) {
                case Direction.N: {
                    currentpos = Direction.E;
                    break;
                }
                case Direction.S: {
                    currentpos = Direction.W;
                    break;
                }
                case Direction.E: {
                    currentpos = Direction.N;
                    break;
                }
                case Direction.W: {
                    currentpos = Direction.S;
                    break;
                }
                default: {
                    currentpos = Direction.E;
                    break;
                }
            }
        }
    });

    let destX : number = parseInt(startMove.startX) + variantHorizontal;
    let destY : number = parseInt(startMove.startY) + variantVertical;
    let destZ : number = 0;

    if (destX < 0){
        destZ = destX * (-1);
        destX = 0;
    }

    if (destY < 0){
        destY = 0;
    }

    const robotpos : Pos = {
        x: destX,
        y: destY,
        z: destZ,
        facing: currentpos
    };

    return robotpos;
};

