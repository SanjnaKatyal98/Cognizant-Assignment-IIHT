import {Observable} from 'rxjs';
const obs=new Observable(
    subscriber=>{
        subscriber.next(6);
        subscriber.next(11);
        subscriber.next(17);
        setTimeout(()=>{
            subscriber.next(89);
            subscriber.complete();
        },2000);
    }
);

console.log('before subscription');
obs.subscribe({
    next(i){console.log(i)},
    error(e){console.log(e)},
    complete(){console.log(' values receive')}
});
console.log('after subscription');