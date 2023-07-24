import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  slug: string = '/admin/panel/';
  tabs: any[] = [
    {
      tab_name: 'brand',
      tab_url: `${this.slug}brand`
    },
    {
      tab_name: 'bronchure',
      tab_url: `${this.slug}bronchure`
    },
    {
      tab_name: 'card',
      tab_url: `${this.slug}card`
    },
    {
      tab_name: 'category',
      tab_url: `${this.slug}category`
    },
    {
      tab_name: 'coating',
      tab_url: `${this.slug}coating`
    },
    {
      tab_name: 'shirt',
      tab_url: `${this.slug}shirts`,
    },
    {
      tab_name: 'sizes',
      tab_url: `${this.slug}sizes`
    },
  
  ];

  ngOnInit(): void {
    this.createTable();
  }
  addTableForm: FormGroup = new FormGroup({
    title: new FormControl('a'),
    dynamicForm: new FormArray([]),
  });

  createTable(): void {
    const columnForm: FormGroup = new FormGroup({
      column: new FormControl('nombreColumna'),
      columnDescription: new FormControl('description'),
      columnExample: new FormControl('ex'),
    });

    const formAarray = this.addTableForm.get('dynamicForm') as FormArray;
    formAarray.push(columnForm);
    console.log(this.addTableForm.value);
  }

  get returnArray() {
    return this.addTableForm.get('dynamicForm') as FormArray;
  }

  addColumn(): void {}
}
