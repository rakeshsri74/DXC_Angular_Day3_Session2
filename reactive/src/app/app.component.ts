import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { Observable, of, range, from, fromEvent } from 'rxjs'; 
import { ajax } from 'rxjs/ajax'; 
import { filter, map, catchError } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive programming concept'; 
  numbers : number[] = []; 
  val1 : number = 0; 
  filteredNumbers : number[] = []; 
  val2 : number = 0; 
  processedNumbers : number[] = []; 
  val3 : number = 0; 
  apiMessage : string=''; 
  counter1 : number = 0;
  res1:any;
  @ViewChild('counter') counter: any;
    ngOnInit() { 
     // Observable stream of data Observable<number>
     // const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
     // const numbers$ = range(1,10); 
     const numbers$ = from([1,2,3,4,5,6,7,8,9,10]); 
     // observer 
     const observer = { 
        next: (num: number) => {this.numbers.push(num); this.val1 += num }, 
        error: (err: any) => console.log(err), 
        complete: () => console.log("Observation completed") 
     }; 
     numbers$.subscribe(observer); 
     const filterFn = filter( (num : number) => num > 5 ); 
     const filteredNumbers = filterFn(numbers$); 
     filteredNumbers.subscribe( (num : number) => {this.filteredNumbers.push(num); this.val2 += num } ); 
     const mapFn = map( (num : number) => num + num ); 
     const processedNumbers$ = numbers$.pipe(filterFn, mapFn); 
     processedNumbers$.subscribe( (num : number) => {this.processedNumbers.push(num); this.val3 += num } ); 
     const api$ = ajax({ 
        url: 'https://httpbin.org/delay/1', 
        method: 'POST', 
        headers: {'Content-Type': 'application/text' }, 
        body: "Hello" 
     }); 
     
     api$.subscribe(res => this.apiMessage = this.res1.response.data); 
     const clickEvent$ = fromEvent(this.counter.nativeElement, 'click'); 
     clickEvent$.subscribe( () => this.counter1++ ); 
  } 
}
