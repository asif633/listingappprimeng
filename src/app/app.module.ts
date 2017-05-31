import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PanelModule } from 'primeng/components/panel/panel';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { MessagesModule } from 'primeng/components/messages/messages';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ButtonModule } from 'primeng/components/button/button';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationService } from './shared/authentication.service';
import { environment } from '../environments/environment';
import { AuthGuard } from './shared/authguard.service';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductsManageComponent } from './products-manage/products-manage.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardViewComponent,
    ListViewComponent,
    CardContainerComponent,
    CardComponent,
    ListContainerComponent,
    ListItemComponent,
    SignInComponent,
    ProductsTableComponent,
    ProductsManageComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    PanelModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    BrowserAnimationsModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FileUploadModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthenticationService, AuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
