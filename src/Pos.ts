export interface Pos {
    x: number;
    y: number;
    facing:Direction;
}

export enum Direction {
    N = 'FORWARD UP',
    S = 'BACK DOWN',
    E = 'TURN LEFT',
    W = 'TURN RIGHT'
};
