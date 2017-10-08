import { AfterContentInit, Component, ContentChild, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentInit {

  @ContentChild('search', { read: TemplateRef })
  public searchCmp: TemplateRef<HeaderComponent>;

  @ViewChild('header', { read: ViewContainerRef })
  public headerCmp: ViewContainerRef;
  public ngAfterContentInit(): void {
    this.headerCmp.createEmbeddedView(this.searchCmp);
  }
}
