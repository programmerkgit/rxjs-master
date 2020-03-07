import { ConnectableObservable, from, Observable, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';


const source = from([ 1, 2, 3 ]) as Observable<number>;
const subject = new Subject<number>();

const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>;

/* 普通のObservableと違い、subscribeはconnectを呼び出すまで実行されないので複数のsubscribeをつけられる。 */
multicasted.subscribe(v => {
    console.log('A: ' + v);
});

multicasted.subscribe(v => {
    console.log('B: ' + v);
});

multicasted.connect();
