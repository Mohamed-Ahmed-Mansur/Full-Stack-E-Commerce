import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto/log.dto';
import { regDto } from './dto/reg.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private userModel,
    private jwtService: JwtService,
  ) {}

  private async found(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async log(loguser: LoginDto, res: Response) {
    let founduser = await this.found(loguser.email);
    if (!founduser) return { message: 'Invalid Email Or Password !!' };
    let istruepass = await bcrypt.compare(loguser.password, founduser.password);
    if (!istruepass) return { message: 'Invalid Email Or Password !!' };
    let myJWT = await this.jwtService.sign({
      name: founduser.name,
      isAdmin: founduser.isAdmin,
      isUser: founduser.isUser,
      isSeller: founduser.isSeller,
    });
    res.header('x-auth-token', myJWT);
    return { message: 'Logged-In Successfully' };
  }

  async reg(reguser: regDto) {
    let foundUser = await this.userModel.findOne({
      email: reguser.email,
    });
    if (foundUser) return { message: 'your Email is Aready exist' };
    let salt = await bcrypt.genSalt(10);
    let HashedPassword = await bcrypt.hash(reguser.password, salt);
    reguser.password = HashedPassword;
    let newUser = new this.userModel(reguser);
    await newUser.save();
    return { message: 'Created Successfully', data: newUser };
  }

  findAll() {
    return this.userModel.find({});
  }

  findOne(id: number) {
    return this.userModel.find({ userId: id });
  }

  async update(id: number, updateUserDto: regDto) {
    let updatedPro = await this.userModel.updateOne(
      { userId: id },
      { $set: updateUserDto },
    );
    return {
      Message: 'Updated',
      updatedUser: updatedPro,
      user: await this.userModel.find({ userId: id }),
    };
  }

  async remove(id: number) {
    let deleUser = await this.userModel.deleteOne({ userId: id });
    return { message: 'User Deleted', deleUser };
  }
}
