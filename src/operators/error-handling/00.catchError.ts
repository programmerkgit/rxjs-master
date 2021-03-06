import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
    map(n => {
        if (n === 4) {
            throw 'four!';
        }
        return n;
    }),
    catchError(err => of('I', 'II', 'III', 'IV', 'V')),
)
    .subscribe(x => console.log(x));
// 1, 2, 3, I, II, III, IV, V

of(1, 2, 3, 4, 5).pipe(
    map(n => {
        if (n === 4) {
            throw new Error('four!');
        }
        return n;
    }),
).subscribe({
    next(v: any) {
        console.log(v);
    },
    error(e: any) {
        console.error(e.toString(), 'toString')
    }
});
