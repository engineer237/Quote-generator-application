import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('form') signupForm: ElementRef

  message: string;
  // name: string
  // email: HTMLInputElement;
  @ViewChild('name') name: ElementRef 
  @ViewChild('email') email: ElementRef 

  quotes = [
    {
      name: "crispu Njenga",
      email: "njengacs@gmail.com",
      quote: "No pain no gain"
    },
    {
      name: "Levis Oleguna",
      email: "oleguna@gmail.com",
      quote: "Hardwork Pays"
    },
    {
      name: "Kioko masaai",
      email: "masaai@gmail.com",
      quote: "focus on future"
    }
  ]

  onSubmitForm() {
    console.log(this.signupForm)
  }
  onSubmitValues() {
    // console.log(
    //   this.name.nativeElement,
    //   // this.email.nativeElement.value,
    //   // this.name,
    //   // this.email,
    //   // this.message
    // )
    let newUser = {
      name: this.name.nativeElement.value,
      email: this.email.nativeElement.value,
      quote: this.message
    }
    this.quotes.push(newUser)
  }

}