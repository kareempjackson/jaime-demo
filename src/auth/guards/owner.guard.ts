import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';

interface RequestUser {
  id: string;
  email: string;
  role: string;
}

@Injectable()
export class OwnerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const user = (request as any).user as RequestUser | undefined;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    if (user.role !== 'owner') {
      throw new ForbiddenException('Only owners can perform this action');
    }

    return true;
  }
}
