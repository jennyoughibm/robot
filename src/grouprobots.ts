import {moveToDest} from "./coordinates"
import Movement from "./movement";
import {Pos} from "./Pos";

let groupRobotPos: Pos[] = [];
export const destForGroupRobots = (startMove : Movement, ) : Pos[] => {
    let i;
    for (i = 0; i < 500; i++) {
       const robotpos :Pos = moveToDest(startMove);
        groupRobotPos.push(robotpos);
    }
    return groupRobotPos;
};
