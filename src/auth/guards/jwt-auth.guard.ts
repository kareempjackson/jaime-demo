import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }

    // For now, we extract the token and attach a mock user
    // This will be replaced with proper JWT validation in the auth sprint
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      throw new UnauthorizedException('Invalid token');
    }

    // Mock user for development - will be replaced with JWT payload
    (request as any).user = {
      id: 'mock-user-id',
      email: 'owner@juicebar.com',
      role: 'owner',
    };

    return true;
  }
}
