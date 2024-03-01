import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PiecesXColorsCost } from 'src/app/core/data/PiecesXcolorCost';
import { TShirtsModelsData } from 'src/app/core/data/TShirts-data';
import { TShirt } from 'src/app/core/schemas/t-shirts.interface';

@Component({
  selector: 'app-insta-quote',
  templateUrl: './insta-quote.component.html',
  styleUrls: ['./insta-quote.component.css'],
})
export class InstaQuoteComponent {
  @ViewChild('itemsQuantity') itemsInput!: ElementRef<HTMLInputElement>;
  @ViewChild('frontColorQuantity')
  frontColorInput!: ElementRef<HTMLInputElement>;
  @ViewChild('backColorQuantity') backColorInput!: ElementRef<HTMLInputElement>;

  tshirtModels: TShirt[] = TShirtsModelsData;
  piecesXColorsCost: any[] = PiecesXColorsCost;

  constructor() {
    this.instaQuoteForm.get('emailQuote')?.disable();
    // this.itemsInput.nativeElement.defaultValue = '0';
    // console.log(this.tshirtModels);
    // console.log("length "+this.piecesXColorsCost.length)
  }
  instaQuoteForm: FormGroup = new FormGroup({
    // screenprinting: new FormControl(),
    // embroidery: new FormControl(),
    // dtf: new FormControl(),
    shirtModelSelected: new FormControl(this.tshirtModels[0].model),
    processType: new FormControl('screenprinting'),

    itemsQuantity: new FormControl(0),
    frontColorQuantity: new FormControl(0),
    backColorQuantity: new FormControl(0),

    emailQuote: new FormControl(),
  });

  AlwaysZero(): void {
    // console.log(typeof(this.itemsInput.nativeElement.value))
    if (this.itemsInput.nativeElement.value === '') {
      this.itemsInput.nativeElement.valueAsNumber = 0;
    }
    if (this.frontColorInput.nativeElement.value === '') {
      this.frontColorInput.nativeElement.valueAsNumber = 0;
    }
    if (this.backColorInput.nativeElement.value === '') {
      this.backColorInput.nativeElement.valueAsNumber = 0;
    }
  }

  //cost per shirt
  taxes: number = 1.0825;
  processType: string = '';
  shirtCost: number = 0;
  shirtModel: string = '';
  shirtSelected: TShirt = { model: '', sku: '', description: '', cost: 0 };
  designCost: number = 0;
  filmCost: number = 0;
  setupCost: number = 0;
  shirtQuantity: number = 0;
  shirtFaces: number = 0;
  shirtFacesCost: number = 0;
  frontColors: number = 0;
  backColors: number = 0;
  totalColors: number = 0;
  total: number = 0;

  CalculateTotal() {
    this.shirtCost = this.shirtSelected.cost;
    this.filmCost = 10 / this.shirtQuantity;
    this.setupCost =
      this.totalColors > 3 ? 60 / this.shirtQuantity : 40 / this.shirtQuantity;
    this.designCost = this.getDesignCost();
    this.shirtFacesCost = this.designCost * this.shirtFaces;
    const unitCost: number =
      (this.filmCost + this.setupCost + this.shirtCost + this.shirtFacesCost) *
      this.taxes;
    console.log(
      this.filmCost,
      this.setupCost,
      this.shirtCost,
      this.shirtFacesCost
    );
    this.total = parseFloat((unitCost * this.shirtQuantity).toFixed(2));
  }

  OnValueChange() {
    this.shirtModel = this.instaQuoteForm.get('shirtModelSelected')?.value;
    this.processType = this.instaQuoteForm.get('processType')!.value;
    const shirtIndex: number = this.tshirtModels.findIndex(
      (element) => element.model === this.shirtModel
    );
    this.shirtSelected = this.tshirtModels[shirtIndex];

    this.shirtQuantity = this.instaQuoteForm.get('itemsQuantity')?.value;
    this.frontColors = this.instaQuoteForm.get('frontColorQuantity')?.value;
    this.backColors = this.instaQuoteForm.get('backColorQuantity')?.value;
    this.totalColors = this.backColors + this.frontColors;

    if (
      (this.frontColors === 0 && this.backColors === 0) ||
      (this.frontColors === null && this.backColors === null)
    ) {
      this.shirtFaces = 2;
    } else {
      this.shirtFaces = 1;
    }

    console.log('shirt quantity = ' + this.shirtQuantity);
    this.CalculateTotal();
  }

  getDesignCost(): number {
    for (let i = 1; i < this.piecesXColorsCost.length; i++) {

      if (
        this.shirtQuantity >= this.piecesXColorsCost[i][0] &&
        this.shirtQuantity <= this.piecesXColorsCost[i][1] 
      ) 
      {
        this.designCost = this.piecesXColorsCost[i][this.totalColors + 1];
        console.log(
          'from array' + this.piecesXColorsCost[i][this.totalColors + 1]
        );
        break;
      } else {
        console.log('shirt quantity 2 = ' + this.shirtQuantity);
        console.log(
          'piecesxcolor = ' +
          this.piecesXColorsCost[i][0] +
          ' ' +
          this.piecesXColorsCost[i][1]
        );
        console.log('total colors = ' + this.totalColors);
        console.log(
          'this.designCost = ' + this.piecesXColorsCost[i][this.totalColors + 1]
        );
      }
    }
    // console.log("design cost "+this.designCost)
    return this.designCost;
  }
}
