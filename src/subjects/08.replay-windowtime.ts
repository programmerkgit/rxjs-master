import { ReplaySubject } from 'rxjs';


/* 500ms分しか保存できない */
const subject = new ReplaySubject(100, 500);

let count = 0;
const id = setInterval(() => {
    subject.next(count++);
}, 100);

setTimeout(() => {
    clearInterval(id);
    /* stock分をsubscribe */
    subject.subscribe(v => {
        console.log(v);
    });
}, 1000);
