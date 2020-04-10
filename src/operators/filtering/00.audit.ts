import { interval, Subject } from 'rxjs';
import { audit } from 'rxjs/operators';

const emitter = interval(100);

const subject = new Subject();

emitter.pipe(
    /* audit is registered to emitter */
    audit(n => {
        /* subjectがemitしたタイミングでemitterが通過する*/
        return subject;
    }),
).subscribe(v => {
    console.log(v);
});

const randomEmit = () => {
    subject.next();
    setTimeout(() => {
        randomEmit();
    }, 3000);
};
randomEmit();
