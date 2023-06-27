import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { DebugService } from '../debug.service';
@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css']
})
export class ExpenseEntryListComponent implements OnInit {
title:string='';
expenseEntries:ExpenseEntry[]=[];

constructor(private debugService:DebugService){}

ngOnInit(): void {
  this.debugService.info("Expense Entry List Component Initialized");
  this.title="Expense Entry List";
  this.expenseEntries=this.getExpenseEntries();
}
  getExpenseEntries():ExpenseEntry[]{
    let mockExpenseEntries:any[]=[
      {
        id:1,
        item:"Pizza",
        category:"Food",
        location:"McDonald",
        spendOn:new Date(2023,6,27,10,10,10),
        createdOn:new Date(2019,2,23,23,23,23)
      },
      {
        id:2,
        item:"Burger",
        category:"Food",
        location:"McDonald",
        spendOn:new Date(2023,6,27,10,10,10),
        createdOn:new Date(2019,2,23,23,23,23)
      },
      {
        id:3,
        item:"Pizza",
        category:"Food",
        location:"KFC",
        spendOn:new Date(2023,6,27,10,10,10),
        createdOn:new Date(2019,2,23,23,23,23)
      },
      {
        id:4,
        item:"Pizza",
        category:"Food",
        location:"KFC",
        spendOn:new Date(2023,6,27,10,10,10),
        createdOn:new Date(2019,2,23,23,23,23)
      }
    ];
    return mockExpenseEntries;
  }
}
