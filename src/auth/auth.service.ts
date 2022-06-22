import {Injectable} from "@nestjs/common";

@Injectable({})
export class AuthService {
  signup() {
    return {
      message: "signup2"
    }
  }
  
  signin() {
    return {
      message: "signin"
    }
  }
}