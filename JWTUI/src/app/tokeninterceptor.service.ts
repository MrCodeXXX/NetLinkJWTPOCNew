import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private auth: AuthenticationService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url.search("/login")){

    }else{
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
    }
    

    return next.handle(req);
  }
  // intercept(req :  HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>  {
  //  console.log("In the interceptor");
  //  //const re= "/login";

  //  if(req.url.search(re)=== -1){
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: 'Bearer token.s.1'
  //     }
  //   })
  //    return next.handle(tokenizedReq)
  //  }

  // }
}
