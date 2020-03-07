import { interval, Subject } from 'rxjs';
import { debounce } from 'rxjs/operators';

const subject = new Subject();

subject.pipe(
    debounce((v) => {
        return interval(800);
    })
).subscribe(v => {
    console.log(v);
});


let time;
let count = 0;
const randomEmit = () => {
    /* 800を超えないとリセットされる */
    time = Math.random() * 1000;
    subject.next(count++);
    setTimeout(() => {
        randomEmit();
    }, time);
};
randomEmit();
