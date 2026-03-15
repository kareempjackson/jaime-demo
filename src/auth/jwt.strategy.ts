import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'juice-bar-secret-key-change-in-production',
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (token && this.authService.isTokenInvalidated(token)) {
      throw new UnauthorizedException('Token has been invalidated');
    }

    const staff = await this.authService.validateStaff(payload.staff_id);
    
    if (!staff) {
      throw new UnauthorizedException('Staff member not found or inactive');
    }

    return {
      staff_id: payload.staff_id,
      store_id: payload.store_id,
      is_owner: payload.is_owner,
      staff,
    };
  }
}
