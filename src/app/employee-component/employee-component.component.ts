import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css'],
  providers:[ DatePipe]
})
export class EmployeeComponentComponent implements OnInit {
  order: boolean = false;
  searchedKeyword: string;
  empDetails: any = [];
  currentDate:any;
  yearDiff:any;
  departmentsCount:any;
 date2 = new Date("07/30/1999"); 


  candidate_data=[ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": '8/10/2016'
},
{"id": 12,"name": "John","department": "HR","joining_date": "1/18/2011"},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "11/28/2019"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "07/07/2017"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "8/19/2014"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "10/5/2014"}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "04/06/2014"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "12/08/2010"}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "05/07/2011"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "10/20/2010"}]

  constructor(private datePipe: DatePipe) {
    this.currentDate = new Date();
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');
    console.log(this.currentDate);
   }

  ngOnInit(): void {
    this.empDetails = this.candidate_data;
  
  }

  sortByName(value) {
    
    if (this.order) {
      this.candidate_data = this.candidate_data.sort(
        (a, b) => (a.name > b.name ? -1 : 1));
    }
    else {
      this.candidate_data = this.candidate_data.sort(
        (a, b) => (a.name > b.name ? 1 : -1));
    }    
    this.order = !this.order;
  }

 
  sortByJoiningDate(){
    return this.candidate_data.sort((a, b) => {
      return <any>new Date(b.joining_date) - <any>new Date(a.joining_date);
    });
  
  }
  filterByText(initial: string) {
    this.candidate_data = this.empDetails;
    this.candidate_data = this.candidate_data.filter(i => i.name.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
    console.log(this.candidate_data);
  }
  deleteItem(){
     this.candidate_data = this.candidate_data.filter(a => a.department !== 'Development');
  }

  getDistict(){
    const departmentAndCount = this.candidate_data.reduce((acc, it) => {
      acc[it.department] = acc[it.department] + 1 || 1;
      return acc;
    }, {});
    this.departmentsCount = departmentAndCount;
    console.log(departmentAndCount);
  }

  workExp(){
     let sortedData=[];
    this.empDetails.forEach((value) => { 
        let joining_date = this.datePipe.transform(value.joining_date, 'MM/dd/yyyy');
        let diff:any = this.CalculateDiffYear(joining_date);
        if(diff > 2){
          sortedData.push(value);
        }
    });
     this.candidate_data = sortedData;
  }

  public CalculateDiffYear(joiningDate): void {
    let diffrence;
    if (joiningDate) {
      var timeDiff = Math.abs(Date.now() - new Date(joiningDate).getTime());
      diffrence = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
       return diffrence
    }
  }

}
