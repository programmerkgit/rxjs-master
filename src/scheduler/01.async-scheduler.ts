import { asyncScheduler, from } from 'rxjs';

const proxyObserver = {
    next(value: number): void {
        /* similar to setInterval */
        const a = asyncScheduler.schedule(
            (x: any) => {
                console.log(x);
            },
            500,
            value
        );
    }
};

from([ 1, 2, 3, 4 ]).subscribe(v => {
    proxyObserver.next(v as number);
});
