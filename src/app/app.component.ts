import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculator = {
    formula: '* 0.62 + 15',
    inputValue: 0,
    outputValue: 0
  }
  calculate(num: number, formula: string) {
    const fullFormula = (num.toString() || 0) + formula;
    let result = 9999999;
    try {
      result = eval(fullFormula);
    } catch (error) {
      console.log(error);
      
    }
    return result
  }
}
