import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private socialService: SocialAuthService, private authServices: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  googleLogin() {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(resp => {
        this.authServices.authLogin(resp).subscribe(data => {
          localStorage.setItem('user', JSON.stringify(data));
          if (data) {
            this.router.navigate(['cp-admin']);
            this.toastr.success('Đăng nhập thành công', 'Thông báo');
          }
        })
      })
  }
}
