import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';


const numbs = interval(10);

numbs.pipe(
    take(10),
    reduce((acc, v) => {
        return acc + v;
    }, 0)
).subscribe(v => {
    console.log(v);
});
