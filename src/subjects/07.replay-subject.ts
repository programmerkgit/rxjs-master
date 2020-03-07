import { ReplaySubject } from 'rxjs';


const subject = new ReplaySubject(3);
subject.next(1);
subject.next(2);

subject.subscribe(v => {
    console.log('subscribe all', v);
});

subject.next(3);
subject.next(4);

subject.subscribe(v => {
    /* not stocked. subscribe only 2 */
    console.log('stocked value: 2 to 4', v);
});
