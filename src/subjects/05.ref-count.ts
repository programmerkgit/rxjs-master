import { from, ReplaySubject } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';


const source = from([ 1, 2, 3, 4 ]);
const subject = new ReplaySubject();

const refCounted = source.pipe(multicast(subject), refCount());

refCounted.subscribe(v => {
    console.log(v);
});

setTimeout(() => {
    refCounted.subscribe(v => {
        console.log(v);
    });
}, 500);
