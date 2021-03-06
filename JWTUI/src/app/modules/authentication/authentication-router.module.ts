import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";


const authRouter: Routes=[

    {
        path:'',
        children: [

            {
                path: '' ,
                redirectTo : 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            }

        ]

    }
];

@NgModule({
    imports: [
      RouterModule.forChild(authRouter)
    ],
    exports: [
      RouterModule
    ]
  })

export class AuthenticationRouterModule{} 