import {moveToDest} from '../src/coordinates';
import movement from '../src/movement';
import {Direction, Pos} from '../src/Pos';

describe('movements', function() {
    let result : string[];
    it('basic horizontal move', function() {
        const move = new movement("0", "0", "FFBB");
        const result : Pos = moveToDest(move);
        expect(result.x===0);
    });

    it('basic vertical movement', function() {
        const move = new movement('0', '0', 'LLRR');
        const result:Pos = moveToDest(move);
        expect(result.facing===Direction.N);
    });

    it('test data 1 - destination (-1, 21)', function() {
        const move = new movement('0', '0', 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
        const result:Pos = moveToDest(move);
        expect(result.x===21);
        expect(result.y===0);
        expect(result.z===1);
        expect(result.facing === Direction.N)
    });

    it('test data 2 - destination (4, 19)', function() {
        const move = new movement('3', '6', 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
        const result :Pos= moveToDest(move);
        expect(result.x===19);
        expect(result.y===4);
    });

    it('test data 3 - destination (3, 15)', function() {
        const move = new movement('0', '7', 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
        const result: Pos = moveToDest(move);
        expect(result.x===15);
        expect(result.y ===3);
    });
});
