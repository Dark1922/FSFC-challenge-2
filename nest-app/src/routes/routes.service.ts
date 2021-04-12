import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRouteDto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Model } from 'mongoose';
import { Route, RouteDocument } from './entities/route.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name)
    private routeModel: Model<RouteDocument>,
  ) {}

  create(routeDto: CreateRouteDto) {
    return this.routeModel.create(routeDto);
  }

  findAll() {
    return this.routeModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} route`;
  // }
  //
  // update(id: number, partialRouteDto: PartialRouteDto) {
  //   return `This action updates a #${id} route`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} route`;
  // }
}
