import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
    next: (v) => {
        console.log(v);
    }
});

subject.next(100);
let count = 0;
const id = setInterval(() => {
    subject.next(count++);
}, 500);

setTimeout(() => {
    clearInterval(id);
}, 10000);
