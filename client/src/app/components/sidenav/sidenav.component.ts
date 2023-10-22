import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isExpanded: boolean = false;

  // expand(): void {
  //   this.isExpanded = !this.isExpanded;
  // }
}
