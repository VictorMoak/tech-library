import { Controller, Put, Param, Body } from '@nestjs/common';

import { AuthorsService } from './author.Service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Put(':id')
  async updateAuthor(
    @Param('id') id: number,
    @Body() updateData: { name: string; birthdate: Date; nationality: string },
  ) {
    await this.authorsService.updateAuthor(id, updateData);
    return { message: 'Author updated successfully' };
  }
}
