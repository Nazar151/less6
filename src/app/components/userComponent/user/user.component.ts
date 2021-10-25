import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { User } from '../../interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  user: User

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy', this.user)
  }


}
