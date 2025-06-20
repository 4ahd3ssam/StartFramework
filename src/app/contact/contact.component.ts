import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface IInput {
  name: string,
  type: string
}

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  inputs: IInput[] = [
    {
      name: "userName",
      type: "text"
    },
    {
      name: "userAge",
      type: "number"
    },
    {
      name: "userEmail",
      type: "email"
    },
    {
      name: "userPassword",
      type: "password"
    }
  ]

  checkInput(currInput: HTMLInputElement, currLabel: HTMLLabelElement): void {
    if (currInput.value.trim() !== '') {
      currLabel?.classList.add("translateUp");
    } else {
      currLabel?.classList.remove("translateUp");
    }
  }
}
