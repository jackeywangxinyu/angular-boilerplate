import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profit = '15';
  inputValue = '';
  formula = '0.062';
  calculate(numStr: string, formula: string, profit: string) {
    let result = 9999999;

    try {
      const num = Number(numStr);
      const formula_num = Number(formula);
      const profit_num = Number(profit);

      result = num * formula_num + profit_num;
    } catch (error) {
      console.log(error);
    }
    return result.toFixed(2);
  }
}
