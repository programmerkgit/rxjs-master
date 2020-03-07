import { ConnectableObservable, interval, ReplaySubject } from 'rxjs';
import { multicast } from 'rxjs/operators';


const source = interval(500);

/* emitted values are stocked. */
const subject = new ReplaySubject<number>();

const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>;

/* 普通のObservableと違い、subscribeはconnectを呼び出すまで実行されないので複数のsubscribeをつけられる。 */
multicasted.subscribe(v => {
    console.log('A: ' + v);
});

/* connection can be unsubscribed */
const connection = multicasted.connect();

setTimeout(() => {
    multicasted.subscribe(v => {
        console.log('B:', v);
    });
}, 1500);

setTimeout(() => {
    connection.unsubscribe();
    /* unsubscribed can subscribe again */
    multicasted.subscribe(c => {
        console.log('c:', c);
    });
}, 5000);
