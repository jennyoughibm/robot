import Movement from "./movement";

export const moveToDest = (startMove : Movement) : string =>{

    let s = startMove.instruction;
    let variantVertical : number = 0;
    let variantHorizontal : number = 0;

    s.split('').forEach( c => {
        if (c === 'F'){variantVertical = variantVertical +1;}
        if (c === 'B'){variantVertical = variantVertical -1;}
        if (c === 'L'){variantHorizontal = variantHorizontal -1 ;}
        if (c === 'R'){variantHorizontal = variantHorizontal +1 ;}
    });

    const destX : number = parseInt(startMove.startX) + variantHorizontal;
    const destY : number = parseInt(startMove.startY) + variantVertical;

    return destX+ ',' + destY;
};

