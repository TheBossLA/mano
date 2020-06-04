import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { CONTACTS } from '../mock-contact';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formBuilder = new FormBuilder()
  
  constructor() { }

  ngOnInit(): void {
  }
  contacts = CONTACTS
  showDetails: Contact 
  onShow( contact: Contact): void{
    this.showDetails = contact
  }
}
