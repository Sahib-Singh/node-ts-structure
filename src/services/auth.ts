import jwt from 'jsonwebtoken';
import config from '../config';
import { Inject, Service } from 'typedi';
import { IUserInputDTO, IUser } from '../interfaces/IUser';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

@Service()
export default class AuthService {

  constructor(
    @Inject('userModel') private userModel: Models.UserModel,
    @Inject('sessionModel') private sessionModel: Models.SessionModel,
    @Inject('reqPassModel') private reqPassModel: Models.RequestPasswordModel,
    @Inject('logger') private logger: any,
  ) { }

  public async SignUp(userInputDTO: IUserInputDTO): Promise<{ user: IUser; token: string }> {
    try {

      this.logger.silly('Creating user db record');

      const alreadyExist = await this.userModel.findOne({ "contact.email": userInputDTO.contact.email, isDeleted: false });

      if (alreadyExist) {
        throw new Error('Account already exist !');
      }


      const userData = new this.userModel(userInputDTO)
      const userRecord = await userData.save()

      this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);

      if (!userRecord) {
        throw new Error('User cannot be created');
      }

      const user = userRecord.toObject();
      Reflect.deleteProperty(user, 'password');
      Reflect.deleteProperty(user, '__v');

      return { user, token };
    } catch (e) {

      // this.logger.error(e);
      throw e;
    }
  }

  public async SignIn(email: string, password: string): Promise<any> {
    try {

      const userRecord = await this.userModel.findOne({ "contact.email": email, isDeleted: false });

      if (!userRecord) {

        throw new Error('User not registered');
      }

      if (userRecord.isDeleted) {
        throw new Error('User is Deleted');
      }

      if (userRecord.isBlocked) {
        throw new Error('User is Blocked');
      }

      return await this.comparePassword(password, userRecord)

    } catch (e) {
      throw e;
    }
  }

  public async ForgotPassword(email: string, token: any, url: string): Promise<any> {

    try {

      const userData = await this.userModel.findOne({ 'contact.email': email })
      let currentDate = new Date();
      currentDate.setTime(new Date().getTime() + 20 * 60 * 1000);
      if (!userData) {
        throw ` User with ${email} is not registered with us ! `
      }

      const reqPassData = new this.reqPassModel({ _user: userData._id, token: token, expiry: currentDate })
      const reqPassRecord = await reqPassData.save()

      // send mail to given mail with this url ...

      return reqPassRecord

    } catch (e) {
      throw e;
    }
  }

  public async ResetPassword(token: any, password: string): Promise<any> {

    try {

      const reqPassData = await this.reqPassModel.findOne({ token }) as any;

      if (reqPassData) {
        throw 'No Request Found !';
      }

      if (reqPassData.expiry < new Date()) {

        throw 'Invalid Url, please resend email to reset your password!';
      }

      const resetPass = await this.resetPassword(reqPassData._user, password)

      // send mail to know user ... that pass is reset ...

      return resetPass

    } catch (e) {
      throw e;
    }
  }


  public async ChangePassword(authId: ObjectId, oldPassword: string, newPassword: string): Promise<any> {

    try {

      const userData = await this.userModel.findOne({ _id: authId })

      if (!userData) {
        throw 'Request user not found !';
      }

      const changePass = await this.changePassword(authId, userData.password, oldPassword, newPassword)

      if (!changePass) {

        throw 'Old Password Does Not Match, Please try again.';
      }

      return changePass;

    } catch (e) {
      throw e;
    }
  }


  public async Logout(userId: ObjectId, deviceId: string): Promise<any> {
    try {
      return await this.sessionModel.findOneAndRemove({ _user: userId, deviceId })
    } catch (e) {
      throw e;
    }
  }

  private comparePassword(password: string, userRecord: IUser & import("mongoose").Document) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, userRecord.password, (err: any, status: any) => {
        if (err) {
          reject(err)
        } else {
          if (!status) {
            reject(new Error("Incorrect Password"))
          }
          this.logger.silly('Generating JWT');
          const token = this.generateToken(userRecord);
          const user = userRecord.toObject();
          Reflect.deleteProperty(user, 'password');
          resolve({ user, token });
        }
      })
    })
  }


  private resetPassword(userId: ObjectId, password: string) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 8, (err, hash) => {
        if (err) return reject(err)
        else {
          this.userModel.findOneAndUpdate({ _id: userId }, { password: hash }, { new: true })
            .then(resolve)
            .catch(reject)
        }
      })
    })
  }

  private changePassword(userId: ObjectId, password: any, oldPassword: string, newPassword: string) {

    return new Promise((resolve, reject) => {

      bcrypt.compare(oldPassword, password, (err, status) => {
        if (err) return reject(err)
        else {
          if (!status) return resolve(false)
          else {
            bcrypt.hash(newPassword, 8, (err, hash) => {
              if (err) return reject(err)
              else {
                this.userModel.findOneAndUpdate({ _id: userId }, { password: hash }, { new: true })
                  .then(resolve)
                  .catch(reject)
              }
            })
          }
        }
      })
    })
  }

  private generateToken(user: any) {

    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    this.logger.silly(`Sign JWT for userId: ${user._id}`);
    return jwt.sign(
      {
        _id: user._id, // We are gonna use this in the middleware 'isAuth'
        role: user.role,
        name: user.name,
        contact: user.contact,
        isDeleted: user.isDeleted,
        isBlocked: user.isBlocked,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
    );
  }
}
