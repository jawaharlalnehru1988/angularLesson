import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-emulated',
    standalone: true,
    template: ` <div class="stylex-box">Emulated Encapsulation</div> `,
    styles: [`.stylex-box{background-color: blue; color: white; padding: 10px;}`],
    encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent{

}