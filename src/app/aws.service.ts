import {Injectable} from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';

const PoolData = {
  UserPoolId: 'eu-central-1_bvFiHtYBv',
  ClientId: '5bro699otcfov7a21cmc7hsdqc'
};

const userPool = new CognitoUserPool(PoolData);

@Injectable()
export class awsService {

  signupUser(user: string, password: string, email: string, callback: any) {
    const dataEmail = {
      Name: 'email',
      Value: email
    };
    
    const  emailAtt = [new CognitoUserAttribute(dataEmail)];

    userPool.signUp(user,  password, emailAtt, null, callback)
  }

  confirmUser(username: string, code: string, callback: any) {
    const userData = {
      Username: username,
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, callback);
  }
}
