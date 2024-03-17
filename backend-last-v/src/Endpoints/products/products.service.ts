import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('products') private ProductsModel) {}

  async create(createProductDto: CreateProductDto) {
    let newproduct = new this.ProductsModel(createProductDto);
    let allProducts = await this.ProductsModel.find({});
    let lastProductID = allProducts[allProducts.length - 1].id;
    newproduct.id = lastProductID + 1;

    await newproduct.save();
    return { message: 'Added Successfully', data: newproduct };
  }

  findAll() {
    return this.ProductsModel.find({});
  }

  findOne(id: number) {
    return this.ProductsModel.findOne({ id: id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let updatedPro = await this.ProductsModel.updateOne(
      { id: id },
      { $set: updateProductDto },
    );
    return {
      Message: 'Updated',
      UpdatedProduct: updatedPro,
      Product: await this.ProductsModel.find({ id: id }),
    };
  }

  async remove(id: number) {
    let remainderproduct = await this.ProductsModel.findOneAndDelete({
      id: id,
    });
    return { message: 'deleted Successfully', data: remainderproduct };
  }
  findByCategoryAndSub(Category: string, subCategory: string) {
    return this.ProductsModel.find({
      category: Category,
      subcategory: subCategory,
    });
  }
  findByCategory(category: string) {
    return this.ProductsModel.find({ category });
  }
}
