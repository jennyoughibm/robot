import {moveToDest} from '../src/coordinates';
import movement from '../src/movement';

describe('movements', function() {
    let result : string[];
    it('basic horizontal move', function() {
        const move = new movement("0", "0", "FFBB");
        result = moveToDest(move).split(',');
        expect(parseInt(result[0])).toBe(0);
    });

    it('basic vertical movement', function() {
        const move = new movement('0', '0', 'LLRR');
        result = moveToDest(move).split(',');
        expect(parseInt(result[1])).toBe(0);
    });

    it('test data 1 - destination (-1, 21)', function() {
        const move = new movement('0', '0', 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
        result = moveToDest(move).split(',');
        expect(parseInt(result[1])).toBe(21);
        expect(parseInt(result[0])).toBe(-1);
    });

    it('test data 2 - destination (4, 19)', function() {
        const move = new movement('3', '6', 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
        result = moveToDest(move).split(',');
        expect(parseInt(result[1])).toBe(19);
        expect(parseInt(result[0])).toBe(4);
    });

    it('test data 3 - destination (3, 15)', function() {
        const move = new movement('0', '7', 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
        result = moveToDest(move).split(',');
        expect(parseInt(result[1])).toBe(15);
        expect(parseInt(result[0])).toBe(3);
    });
});
