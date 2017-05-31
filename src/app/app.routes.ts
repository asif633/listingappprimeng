import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './shared/authguard.service';
import { ProductsManageComponent } from './products-manage/products-manage.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: NavbarComponent, children: [
            {path: 'cardView', component: CardViewComponent},
            {path: 'listView', component: ListViewComponent},
            {path: 'signin', component: SignInComponent},
            {path: 'manageProducts', component: ProductsManageComponent, canActivate: [AuthGuard]}
        ]}
    ]},
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});