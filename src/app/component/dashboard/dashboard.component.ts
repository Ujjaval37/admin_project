import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import userData from '../../json/jsonData.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource : Array<User> = [];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];

  constructor(private userService: UserService) {
    this.dataSource = this.userService.usersData;
  }

  ngOnInit(): void {
    console.log(userData, "sdf");
    //   fetch('../../json/jasonData.json').then(res => res.json())
    //   .then(fetchData => {
    //     this.fetchData = fetchData;
    //   });
    // }
  }
}
