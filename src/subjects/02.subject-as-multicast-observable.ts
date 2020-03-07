import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
    next: (v) => {
        console.log('observable1', v);
    }
});

subject.subscribe({
    next: value => {
        console.log('observable2', value);
    }
});

let count = 0;
setInterval(() => {
    subject.next(count++);
}, 500);
