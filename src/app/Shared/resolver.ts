import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../service/user.service';
import { UserModel } from '../model/userModel';


@Injectable()
export class TResolver implements Resolve<Observable<UserModel>> {
    constructor(private serivce: UserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = +route.paramMap.get('id');
        return this.serivce.getUser(id).pipe(map((res: any) => {
            return res;
        }), catchError((error, caught) => {
            return error;
        }));
    }
}