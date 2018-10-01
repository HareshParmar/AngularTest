import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'users',
        loadChildren: './User/user.module#UserModule'
    },
    {
        path: 'userdetail/:id',
        loadChildren: './UserDetail/userdetail.module#UserDetailModule'
    },
    {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

export const Routing = RouterModule.forRoot(appRoutes);