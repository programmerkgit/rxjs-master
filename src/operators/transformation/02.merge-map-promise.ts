import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


const letters = from([ 'a', 'b', 'c' ]) as Observable<string>;
letters.pipe(
    mergeMap(x => {
        return Promise.resolve(x);
    })
).subscribe(v => {
    console.log(v);
});
