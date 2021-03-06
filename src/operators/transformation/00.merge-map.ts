import { from, interval, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

/* merge map merges interval */
const letters = from([ 'a', 'b', 'c' ]) as Observable<string>;

letters.pipe(
    /* [a, b, c] + 1, [a, b, c] + 2, */
    mergeMap(x => {
        return interval(1000).pipe(map(i => {
            return x + i;
        }));
    })
).subscribe(v => {
    console.log(v);
});
