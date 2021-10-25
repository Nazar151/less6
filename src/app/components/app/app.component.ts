import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { UsersComponent } from '../userComponent/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild(UsersComponent)
  usersComponentChild: UsersComponent

  constructor() {
    console.log('constructor')
    console.log(this.usersComponentChild)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }


  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.usersComponentChild)
  }
ngAfterViewInit() {
  console.log(this.usersComponentChild)
}

}
