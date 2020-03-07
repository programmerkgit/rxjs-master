import { from, interval, Observable } from 'rxjs';
import { mergeMapTo } from 'rxjs/operators';

/* merge map merges interval */
const letters = from([ 'a', 'b', 'c' ]) as Observable<string>;
letters.pipe(
    /* mergeMapTo have no reference to letters*/
    mergeMapTo(interval(1000), 2)
).subscribe(x => {
    console.log(x);
});
