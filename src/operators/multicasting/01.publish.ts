import { ConnectableObservable, Subject } from 'rxjs';
import { publish } from 'rxjs/operators';


const subject = new Subject();


const published = subject.pipe(
    publish()
) as ConnectableObservable<number>;

published.subscribe(v => {
    console.log(v);
});
/* value before connect is skipped */
subject.next(1);
subject.next(2);
subject.next(3);
/* value after connect is subscribed */
published.connect();
subject.next(4);
subject.next(5);



