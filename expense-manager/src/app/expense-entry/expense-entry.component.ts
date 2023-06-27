import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  //template: `<h1> {{title}} </h1>`,
  styleUrls: ['./expense-entry.component.css']
  //styles: ['h1{color:red;}']
})
export class ExpenseEntryComponent implements OnInit {
  title:string="Expense Entry";
  expenseEntry:any;
  ngOnInit(): void {
    this.expenseEntry={
      id:1,
      item:"Pizza",
      amount:500,
      category:"Food",
      location:"Zomato",
      spendOn:new Date(2023,6,26,10,10,10),
      createdOn:new Date(2023,6,26,10,10,10),
    }
  }
}
