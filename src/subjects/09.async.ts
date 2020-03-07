import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject();

subject.subscribe(v => {
    /* subjectがcompleteした時にsubscribe */
    console.log(v);
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.complete();
/* not subscribed */
subject.next(5);
subject.complete();
