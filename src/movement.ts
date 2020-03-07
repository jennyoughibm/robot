export default class Movement {
    instruction: string;

    constructor(public startX, public startY, public movementInstruction) {
        this.instruction = movementInstruction;
    };
}
