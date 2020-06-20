import { Observable } from "rxjs";


/* Observable --1--2--complete */
/* subscribe is called when observable is subscribed */
/* next function calls callback function */
const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
});

/* pattern1 */
/* observer object is converted to a subscriber */
observable.subscribe({
    next(v) {
        console.log(v);
    },
    error(err: any) {

    },
    complete() {
        console.log("completed");
    }
});

/*  */
observable.subscribe(
    (v) => {
        console.log(v);
    },
    () => {

    },
    () => {
        console.log("completed");
    }
);

