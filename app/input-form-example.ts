import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css']
})
export class InputFormExample {
  allnames = [
    {
      name_id: 1,
      name: 'Food'
    },
    {
      name_id: 2,
      name: 'Transport'
    },
    {
      name_id: 3,
      name: 'Rent'
    },
    {
      name_id: 4,
      name: 'Household'
    },
    {
      name_id: 5,
      name: 'Social'
    }
  ];
  model: any = {};
  ngOnInit() {
    this.model.name_id = 2;
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
