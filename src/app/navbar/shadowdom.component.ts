import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-shadowdom',
    standalone: true,
    template: ` <div class="stylex-box">ShadowDom Encapsulation</div> 
    <p>this is shadow</p>
    `,
    styles: [`.stylex-box{background-color: green; color: white; padding: 10px;}`],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowdomComponent{

}