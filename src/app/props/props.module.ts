import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropsRoutingModule } from './props-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrFormFieldModule } from '../cr-form-field/cr-form-field.module';
import { KesPipe } from './kes.pipe';
import { ShortenPipe } from './shorten.pipe';
import { LogoComponent } from './logo/logo.component';
import { SmallLogoComponent } from './small-logo/small-logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { ProductComponent } from './product/product.component';
import { QuantityComponent } from './quantity/quantity.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    KesPipe,
    ShortenPipe,
    LogoComponent,
    SmallLogoComponent,
    NavBarComponent,
    BottomNavComponent,
    ProductComponent,
    QuantityComponent,
    RatingStarsComponent,
    EditAddressComponent,
  ],
  imports: [
    CommonModule,
    PropsRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    CrFormFieldModule,
    MatButtonModule,
    MatBadgeModule,
    MatRippleModule,
  ],
  exports: [
    KesPipe,
    ShortenPipe,
    NavBarComponent,
    LogoComponent,
    SmallLogoComponent,
    BottomNavComponent,
    ProductComponent,
    QuantityComponent,
    RatingStarsComponent,
    EditAddressComponent,
    FormsModule,
    ReactiveFormsModule,
    CrFormFieldModule,
    MatButtonModule,
    MatBadgeModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ]
})
export class PropsModule { }
