import { from, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';

const asf = async function () {
    console.log('called');
    return 3;
};
const observable = of(null).pipe(
    flatMap(() => {
        return from(asf());
    }),
    tap(v => {
        console.log('subscribed');
    })
);
setTimeout(() => {
    observable.subscribe();
}, 1000);



