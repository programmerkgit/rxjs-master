import { interval, Subject } from 'rxjs';
import { buffer } from 'rxjs/operators';

const intervals = interval(1000);
const subject = new Subject();


/* buffered until subject is emitted */
const buffered = intervals.pipe(buffer(subject));

setInterval(() => {
    subject.next("buf");
}, 5000);

buffered.subscribe(v => {
    console.log(v);
});
