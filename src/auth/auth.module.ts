import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { OwnerGuard } from './guards/owner.guard';

@Module({
  providers: [JwtAuthGuard, OwnerGuard],
  exports: [JwtAuthGuard, OwnerGuard],
})
export class AuthModule {}
