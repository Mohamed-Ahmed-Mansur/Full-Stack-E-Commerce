/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CheckOutService } from './check-out.service';
// import { CreateCheckOutDto } from './dto/create-check-out.dto';
import { UpdateCheckOutDto } from './dto/update-check-out.dto';
import { Response } from 'express';
import { Stripe } from 'stripe'; // Assuming you have installed the Stripe package

@Controller('check-out')
export class CheckOutController {
  private readonly stripe: Stripe;

  // constructor(private readonly checkOutService: CheckOutService) {}

  constructor(private readonly checkOutService: CheckOutService) {
    //     // Initialize Stripe with your API key
    this.stripe = new Stripe(process.env.REACT_PUBLIC_STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16', // Ensure to use the latest API version
    });
  }
  @Post('checkout')
  async handleCheckout(
    @Body()
    cartData: {
      Products: any;
      subTotal: any;
      total: any;
    },
    @Res() res: Response,
  ) {
    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd', // Change currency based on your requirement
              product_data: {
                name: 'Total price', // Set your product name
              },
              unit_amount: cartData.total * 100, // Total amount to charge in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/', // Redirect URL after successful payment
        cancel_url: 'http://localhost:3000/cart', // Redirect URL if the payment is canceled
      });
      // Respond with the session ID to the frontend
      return res.status(HttpStatus.OK).json({ sessionId: session.id });
    } catch (error) {
      // Handle any errors and respond with an error message
      console.error('Error processing payment:', error.message);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error processing payment' });
    }
  }

  @Get()
  findAll() {
    return this.checkOutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkOutService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCheckOutDto: UpdateCheckOutDto,
  ) {
    return this.checkOutService.update(+id, updateCheckOutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkOutService.remove(+id);
  }
}
