import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const subject = new Subject();

subject.pipe(
    debounceTime(100)
).subscribe(v => {
    console.log(v);
});


let time;
let count = 0;
const randomEmit = () => {
    /* 100を超えないとリセットされる */
    time = Math.random() * 200;
    subject.next(count++);
    setTimeout(() => {
        randomEmit();
    }, time);
};
randomEmit();
