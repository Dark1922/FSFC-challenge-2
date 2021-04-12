import {
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/createRouteDto';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body() routeDto: CreateRouteDto) {
    return this.routesService.create(routeDto);
  }

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.routesService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRouteDto: PartialRouteDto) {
  //   return this.routesService.update(+id, updateRouteDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.routesService.remove(+id);
  // }
}
