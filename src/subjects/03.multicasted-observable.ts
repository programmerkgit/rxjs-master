import { ConnectableObservable, from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';


const source = from([ 1, 2, 3 ]) as ConnectableObservable<number>;
const subject = new Subject<number>();

const multicasted = source.pipe(multicast(subject));

/* 普通のObservableと違い、subscribeはconnectを呼び出すまで実行されないので複数のsubscribeをつけられる。 */
multicasted.subscribe(v => {
    console.log('A: ' + v);
});

multicasted.subscribe(v => {
    console.log('b: ' + v);
});

(multicasted as ConnectableObservable<number>).connect();

setTimeout(() => {
    multicasted.subscribe(v => {
        console.log('C:', v);
    });
}, 1000);
