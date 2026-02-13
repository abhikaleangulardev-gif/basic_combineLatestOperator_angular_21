import { Component, OnInit } from '@angular/core';
import { Shared } from '../../service/shared';

@Component({
  selector: 'app-combinelatest',
  standalone: false,
  templateUrl: './combinelatest.html',
  styleUrl: './combinelatest.css',
})
export class Combinelatest implements OnInit{

  constructor(private sharedservice:Shared){}

  ngOnInit(): void {
    this.sharedservice.getAllDetailsList().subscribe({
      next:(_resp:any)=>{
        console.log(_resp); 
      }
    })
  }
}
