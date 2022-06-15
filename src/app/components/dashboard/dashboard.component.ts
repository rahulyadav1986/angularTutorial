import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Users } from './users.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchCity: any;
  searchCountry: any;
  key: string = 'id';
  p: number = 1;
  reverse: boolean = false;
  loading: boolean = false;
  users: Users[] = [];
  constructor(public _userService: UsersService) { }

  ngOnInit(): void {
    this.loading = true;
    this._userService.getusers().subscribe((userdata) => {
      this.users = userdata;
      this.loading = false;
    })
   
  }
  SearchCityMethod() {
    if (this.searchCity == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.city.toLocaleLowerCase().match(this.searchCity.toLocaleLowerCase())

      })
    }
  }

  SearchCountryMethod() {
    if (this.searchCountry == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.country.toLocaleLowerCase().match(this.searchCountry.toLocaleLowerCase())

      })
    }
  }
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse
  }

  saveuser(id: any, name: any, phone: any, email: any, companyName: any, city: any, state: any, country: any, zipCode: any) {

    this.users.push({
      id: id.value,
      name: name.value,
      phone: phone.value,
      email: email.value,
      companyName: companyName.value,
      city: city.value,
      state: state.value,
      country: country.value,
      zipCode: zipCode.value

    });

    

  }
}
