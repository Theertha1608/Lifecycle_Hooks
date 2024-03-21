import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges{
  @Input() message='';
  ngOnInit(): void {
    console.log("Child component on Init");
  }

  ngOnChanges(): void {
    console.log('ngOnChanges content');
  }
  

}
