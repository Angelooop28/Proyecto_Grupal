import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Gente, el proyecto subido al hosting!';
  }
}
