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
    inputValue: '',
    outputValue: 0
  }
  calculate(numStr: string, formula: string, profit: number) {
    const num = Number(numStr)
    let result = 9999999;
    try {
      if (typeof num !== 'number') {
        return ''
      }
      const fullFormula = (num || 0) + formula;
      
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
