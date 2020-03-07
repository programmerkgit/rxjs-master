import { interval, Subject } from 'rxjs';
import { sample } from 'rxjs/operators';

const emitter = interval(100);

const subject = new Subject();

emitter.pipe(
    /* sample is very similar to audit */
    sample(subject),
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
