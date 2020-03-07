import { interval } from 'rxjs';
import { groupBy, mergeMap, reduce, take } from 'rxjs/operators';

const numbs = interval(10);
let count = 0;

numbs.pipe(
    take(100),
    groupBy(v => v % 3),
    mergeMap(group => {
        return group.pipe(reduce((acc, value, index) => {
            return acc + value;
        }, 0));
    })
).subscribe((v) => {
    console.log(v);
});
