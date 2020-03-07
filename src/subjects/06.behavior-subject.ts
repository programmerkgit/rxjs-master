import { BehaviorSubject } from 'rxjs';


const subject = new BehaviorSubject(1);

subject.subscribe(v => {
    console.log('first', v);
});

subject.next(2);

subject.subscribe(v => {
    /* not stocked. subscribe only 2 */
    console.log('not stocked', v);
});
