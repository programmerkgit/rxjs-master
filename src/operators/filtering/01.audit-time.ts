import { interval } from 'rxjs';
import { auditTime } from 'rxjs/operators';

const emitter = interval(100);

emitter.pipe(
    /* audit is registered to emitter */
    auditTime(500)
).subscribe(v => {
    console.log(v);
});

