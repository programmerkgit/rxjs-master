import { ConnectableObservable, from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';


const numbers = from([ 1, 2, 3, 4, 5 ]);
const subject = new Subject();
const multicasted = numbers.pipe(
    multicast(subject)
) as ConnectableObservable<number>;

/* value before connect is skipped */
multicasted.subscribe(v => {
    console.log(v);
});
/* subject emit to subscribe */
subject.next(1);
subject.next(2);
subject.next(3);
console.log('1,2,3');

/* connect emit values to numbers */
multicasted.connect();
/* end of numbers end subscription */
subject.next(4);
subject.next(5);



