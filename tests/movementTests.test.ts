import {moveToDest} from '../src/coordinates';
import movement from '../src/movement';
import {Direction, Pos} from '../src/Pos';

describe('movements', function() {
    let result : string[];
    it('basic horizontal move', function() {
        const move = new movement("0", "0", "FFBB");
        const result : Pos = moveToDest(move);
        expect(result.x).toBe(0);
    });

    it('basic vertical movement', function() {
        const move = new movement('0', '0', 'LLRR');
        const result:Pos = moveToDest(move);
        expect(result.facing).toBe(Direction.N);
    });

    it('test data 1 - destination (0, 11, 6), facing East', function() {
        const move = new movement('0', '0', 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
        const result:Pos = moveToDest(move);
        expect(result.x).toBe(0);
        expect(result.y).toBe(11);
        expect(result.z).toBe(6);
        expect(result.facing).toBe( Direction.E)
    });

    it('test data 2 - destination (0,12,4) facing East', function() {
        const move = new movement('3', '6', 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
        const result :Pos= moveToDest(move);
        expect(result.x).toBe(0);
        expect(result.y).toBe(12);
        expect(result.z).toBe(4);
        expect(result.facing).toBe( Direction.E)
    });

    it('test data 3 - destination (0,18,7) facing West', function() {
        const move = new movement('0', '7', 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
        const result: Pos = moveToDest(move);
        expect(result.x).toBe(0);
        expect(result.y ).toBe(18);
        expect(result.z).toBe(7);
        expect(result.facing).toBe( Direction.W)
    });
});
