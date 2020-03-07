import Movement from "./movement";
import {Pos,Direction} from './Pos';

export const moveToDestOnMars = (startMove : Movement) : Pos =>{

    let s = startMove.instruction;
    let variantVertical : number = 0;
    let variantHorizontal : number = 0;
    let currentpos : Direction = Direction.N;
    let steps: number;

    s.split('').forEach( c => {
        switch (c) {
            case 'F': {
                switch (currentpos) {
                    case Direction.N: {
                        variantVertical = variantVertical + 1;
                        if(steps > 0){
                            variantVertical = variantVertical * steps
                        }
                        break;
                    }
                    case Direction.S: {
                        variantVertical = variantVertical - 1;
                        if(steps > 0){
                            variantVertical = variantVertical * steps
                        }
                        break;
                    }
                    case Direction.E: {
                        variantHorizontal = variantHorizontal - 1;
                        if(steps > 0){
                            variantHorizontal = variantHorizontal * steps
                        }
                        break;
                    }
                    case Direction.W: {
                        variantHorizontal = variantHorizontal + 1;
                        if(steps > 0){
                            variantHorizontal = variantHorizontal * steps
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
                steps=0;
            }
            case 'B': {
                switch (currentpos) {
                    case Direction.N: {
                        variantVertical = variantVertical + 1;
                        if(steps > 0){
                            variantVertical = variantVertical * steps
                        }
                        break;
                    }
                    case Direction.S: {
                        variantVertical = variantVertical - 1;
                        if(steps > 0){
                            variantVertical = variantVertical * steps
                        }
                        break;
                    }
                    case Direction.E: {
                        variantHorizontal = variantHorizontal + 1;
                        if(steps > 0){
                            variantHorizontal = variantHorizontal * steps
                        }
                        break;
                    }
                    case Direction.W: {
                        variantHorizontal = variantHorizontal - 1;
                        if(steps > 0){
                            variantHorizontal = variantHorizontal * steps
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
                steps=0;
            }
            case 'L': {
                switch (currentpos) {
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
                steps=0;
            }
            case 'R': {
                switch (currentpos) {
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
                steps=0;
            }
            default: {
                steps= parseInt(c);
                if(steps > 5){steps=5;}
            }
        }
    });

    let destX : number = parseInt(startMove.startX) + variantHorizontal;
    let destY : number = parseInt(startMove.startY) + variantVertical;
    let destZ : number = 0;

    const robotpos : Pos = {
        x: destX,
        y: destY,
        z: destZ,
        facing: currentpos
    };

    return robotpos;
};

