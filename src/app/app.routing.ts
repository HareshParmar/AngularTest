import { Routes, RouterModule } from '@angular/router';
import { TResolver } from './Shared/resolver';

const appRoutes: Routes = [
    {
        path: 'users',
        loadChildren: './User/user.module#UserModule'
    },
    {
        path: 'userdetail/:id',
        loadChildren: './UserDetail/userdetail.module#UserDetailModule',
        resolve: {
            user : TResolver
        }
    },
    {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

export const Routing = RouterModule.forRoot(appRoutes);