import { ConnectableObservable, interval, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';


const source = interval(500);
const subject = new Subject<any>();

const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<any>;


multicasted.subscribe(v => {
    console.log(v);
});

const connection = multicasted.connect();

setTimeout(() => {
    multicasted.subscribe(v => {
        console.log(100 + v);
    });
}, 500);

setTimeout(() => {
    connection.unsubscribe();
}, 3000);
