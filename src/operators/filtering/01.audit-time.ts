import { interval, Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';

const emitter = interval(100);

const subject = new Subject();

emitter.pipe(
    /* audit is registered to emitter */
    auditTime(500)
).subscribe(v => {
    console.log(v);
});

const randomEmit = () => {
    subject.next();
    setTimeout(() => {
        randomEmit();
    }, Math.random() * 1000);
};
randomEmit();
