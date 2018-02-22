import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css']
})


export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        public todoUser: UsersService,
        public formBuilder: FormBuilder,
        public router: Router,
    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: '',
            email: '',
            password: '',
        });
    }

    onSubmit() {
        this.todoUser.create(
        this.registerForm.get('username').value,
        this.registerForm.get('email').value,
        this.registerForm.get('password').value
        ).subscribe(serverResponse=>{
            this.router.navigate(['/users']);
        }, error=>{
        console.log(error);
        });


  this.router.navigate(['/users']);
}
}
