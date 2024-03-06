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

  @Get()
  findAll() {
    return this.userService.findAll();
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
