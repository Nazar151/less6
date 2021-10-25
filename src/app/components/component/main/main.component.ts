import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[]

  constructor(private mainService : MainService ) { }

  ngOnInit(): void {
    this.mainService.getUsers().subscribe(value => console.log(value))
  }

}
