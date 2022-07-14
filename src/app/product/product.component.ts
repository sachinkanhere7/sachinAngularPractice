import { Component } from "@angular/core";
@Component({
  selector: "app-product",
  template: `<div
      *ngFor="
        let x of rNum
          | paginate: { itemsPerPage: itemsToDisplay, currentPage: page }
      "
    >
      {{ x }}
    </div>
    <pagination-controls
      (pageChange)="pageChanged($event)"
    ></pagination-controls>`
})
export class ProductComponent {
  rNum = <[]>this.genRandomNumbers()
    .sort(function (x: number, y: number) {
      return x - y;
    })
    .filter((x: number) => x < 2000);
  page: Number = 1;
  itemsToDisplay: Number = 10;

  pageChanged(event) {
    this.page = event;
  }

  genRandomNumbers() {
    let rNum = [];
    for (let i = 0; i < 100; i++) {
      let rnd = Math.floor(Math.random() * 9999 + 1);
      rNum.push(rnd);
    }
    return rNum;
  }
}
