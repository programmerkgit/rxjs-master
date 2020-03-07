import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
    next: (v) => {
        console.log(v);
    }
});

let count = 0;
setInterval(() => {
    subject.next(count++);
}, 500);
