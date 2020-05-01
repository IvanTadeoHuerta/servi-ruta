import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/app/login/login.component";
import { HomeComponent } from "src/app/home/home.component";
import { MenuComponent } from "src/app/menu/menu.component";
import { NotAuthGuard } from "src/app/core/auth/not.auth.guard";
import { AuthGuard } from "src/app/core/auth/auth.guard";
import { AuthService } from "src/app/core/auth/auth.service";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  canActivate: [NotAuthGuard]  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard] ,children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthService,
    NotAuthGuard,
    AuthGuard
  ],
})
export class AppRoutingModule { }
