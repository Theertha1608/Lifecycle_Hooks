import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'lifecycle-hooks';
  message = "welcome to our World";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges:", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit of app.component");
    setInterval(() => {
    }, 2000);
  }

  ngDoCheck(): void {
    console.log("from ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  changeMessage(): void {
    this.message = "hello ....";
  }

  ngOnDestroy(): void {
    console.log("Destroying");
  }
}
