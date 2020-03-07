import movement from '../src/movement';
import {Direction, Pos} from '../src/Pos';
import {moveToDestOnMars} from '../src/mars';


describe('movementsOnMars', function() {

    it('test data 1 - destination (-4, 4, 0), facing East', function () {
        const move = new movement('0', '0', 'FFFFFF3FLFFFFFFR5FL');
        const result: Pos = moveToDestOnMars(move);
        expect(result.x).toBe(-4);
        expect(result.y).toBe(4);
        expect(result.z).toBe(0);
        expect(result.facing).toBe(Direction.E)
    });

    it('test data 2 - destination (6,125,0), facing North', function () {
        const move = new movement('4', '3', 'FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF');
        const result: Pos = moveToDestOnMars(move);
        expect(result.x).toBe(6);
        expect(result.y).toBe(125);
        expect(result.z).toBe(0);
        expect(result.facing).toBe(Direction.N)
    });
});
