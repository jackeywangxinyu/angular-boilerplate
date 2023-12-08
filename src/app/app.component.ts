import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profit = 15
  calculator = {
    formula: '* 0.062',
    inputValue: 0,
    outputValue: 0
  }
  calculate(num: number, formula: string, profit: number) {
    console.log(profit);
    
    const fullFormula = (num.toString() || 0) + formula;
    let result = 9999999;
    try {
      result = eval(fullFormula) + Number(profit);
    } catch (error) {
      console.log(error);
      
    }
    return result.toFixed(2)
  }
  change(e: any) {
    this.profit = e.value
  }
}
