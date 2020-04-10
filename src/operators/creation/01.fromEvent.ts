import { fromEvent } from 'rxjs';

const div = document.createElement('div');

fromEvent(div, 'click').subscribe(v => {
    console.log('emitted');
});
