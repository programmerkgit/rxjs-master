import { interval, Subject } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';


const source = interval(100);
const subject = new Subject();

const refCounted = source.pipe(multicast(subject), refCount());

/*　自動でconnectされ、自動でcompleteする　*/
const subscription = refCounted.subscribe(v => {
    console.log('first', v);
});

setTimeout(() => {
    /* stops execution when observables are unsubscribed*/
    subscription.unsubscribe();
    /* start from 0 */
    refCounted.subscribe(v => {
        console.log('second', v);
    });
}, 500);
