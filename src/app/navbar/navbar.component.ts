import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { EmulatedComponent } from './app.emulated';
import { ShadowdomComponent } from './shadowdom.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, IconFieldModule, InputIconModule, SidebarModule, EmulatedComponent, ShadowdomComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;
  
  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
  }

  
}
