import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
    next: (v) => {
        console.log(v);
    }
});

subject.subscribe({
    next: value => {
        console.log('observable2', value);
    }
});

let count = 0;
const id = setInterval(() => {
    subject.next(count++);
}, 500);

setTimeout(() => {
    clearInterval(id);
}, 5000);
