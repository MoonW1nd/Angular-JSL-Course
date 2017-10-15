import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsFilterPipe } from './common/pipes/products-filter.pipe';
import { SafeUrlPipe } from './common/pipes/safe-url.pipe';
import { ProductsService } from './common/sevices/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    TooltipDirective,
    ProductsFilterPipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    {
      provide: ProductsService,
      useClass: ProductsService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }