import { Component } from "@angular/core";
import { UserService } from "../service/user.service";
import { UserModel } from "../model/userModel";
import { Router } from "../../../node_modules/@angular/router";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent {

    usersList: UserModel[];
    constructor(private service: UserService,
                private router : Router) {
    }

    ngOnInit() {
        this.LoadUsers();
    }

    LoadUsers() {
        this.service.getUsers().subscribe((res: UserModel[]) => {
            this.usersList = res;
        });
    }

    LoadUser(id){
        const path = `/userdetail/${id}`;
        this.router.navigate([path]);
    }
}