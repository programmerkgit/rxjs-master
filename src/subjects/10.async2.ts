import { AsyncSubject, from } from 'rxjs';

const source = from([ 1, 2, 3, 4 ]);
const subject = new AsyncSubject();

source.subscribe(subject);
subject.subscribe(v => {
    /* subjectがcompleteした時にsubscribe */
    console.log(v);
});
