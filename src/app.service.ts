import { Injectable } from '@nestjs/common';
import { users } from './constants/userList';

export interface User {
  id: number;
  name: string;
}

export interface HealthStatus {
  status: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getUsers(): User[] {
    return users;
  }

  getHealth(): HealthStatus {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
