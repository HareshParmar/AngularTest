import { Component } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../service/user.service";
import { UserModel } from "../model/userModel";

@Component({
    selector: 'app-userdetail',
    templateUrl: './userdetail.component.html',
    styleUrls: ['./userdetail.component.scss']
})

export class UserDetailComponent {

    user: UserModel;
    constructor(private route: ActivatedRoute,
        private service: UserService
        ) {
    }

    ngOnInit() {
        this.user = this.route.snapshot.data['user'];
        // console.log(this.route.snapshot.data['user']);
    }

    ngAfterContentInit(){
        // this.route.params.subscribe((params) => {
        //     const id = +params['id'];
        //     if (id > 0) {
        //         this.LoadUser(id);
        //     }
        // })
    }

    LoadUser(id: number) {
        this.service.getUser(id).subscribe((res: UserModel) => {
            this.user = res;
        });
    }
}