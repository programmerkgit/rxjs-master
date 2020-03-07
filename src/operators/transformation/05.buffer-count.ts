import { from, interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

const intervals = interval(100);

/* 最初の2個を貯めて,５個目でsubscribe.残りの3個はむし */
const buffered = intervals.pipe(bufferCount(2, 5));


buffered.subscribe(v => {
    console.log(v);
});

const letters = from([ 'a', 'b', 'c', 'd', 'd' ]);

/* 3個貯めて、ab, ["abc"], cb, ["cbd"], d complete["d"] の 3回subscribe */
const letterBuf = letters.pipe(bufferCount(3, 2));

letterBuf.subscribe(v => {
    console.log(v);
});
