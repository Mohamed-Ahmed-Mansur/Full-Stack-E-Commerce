/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/log.dto';
import { regDto } from './dto/reg.dto';
import { Response } from 'express';
import { verifycationCode } from './dto/verifycationCode.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post('log')
  log(@Body() loguser: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.userService.log(loguser, res);
  }
  @UsePipes(ValidationPipe)
  @Post('/reg')
  reg(@Body() reguser: regDto) {
    return this.userService.reg(reguser);
  }
  @UsePipes(ValidationPipe)
  @Post('/verify')
  verify(
    @Body() verifycationCode: verifycationCode,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.verify(verifycationCode, res);
  }
  @UsePipes(ValidationPipe)
  @Post('/forgetPass')
  forgetPassEmail(@Body() Email: { email: string }) {
    return this.userService.forgetPassEmail(Email);
  }
  @UsePipes(ValidationPipe)
  @Post('/codeForForget')
  codeForForget(@Body() code: verifycationCode) {
    return this.userService.codeForForget(code);
  }
  @UsePipes(ValidationPipe)
  @Post('/updatePass')
  updatePass(@Body() EmailAndpassword: { email: string; password: string }) {
    return this.userService.updatePass(EmailAndpassword);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get('admited')
  admited() {
    return this.userService.admited();
  }
  @Get('notAdmited')
  notAdmited() {
    return this.userService.notAdmited();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: regDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
