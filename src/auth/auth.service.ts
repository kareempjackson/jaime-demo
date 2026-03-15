import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private invalidatedTokens: Set<string> = new Set();

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string; staff: { id: string; name: string; is_owner: boolean } }> {
    const { store_code, pin } = loginDto;

    const store = await this.prisma.store.findUnique({
      where: { code: store_code },
    });

    if (!store) {
      throw new UnauthorizedException('Invalid store code or PIN');
    }

    const staffMembers = await this.prisma.staff.findMany({
      where: { store_id: store.id, is_active: true },
    });

    let authenticatedStaff = null;
    for (const staff of staffMembers) {
      const pinMatch = await bcrypt.compare(pin, staff.pin_hash);
      if (pinMatch) {
        authenticatedStaff = staff;
        break;
      }
    }

    if (!authenticatedStaff) {
      throw new UnauthorizedException('Invalid store code or PIN');
    }

    const payload: JwtPayload = {
      sub: authenticatedStaff.id,
      store_id: store.id,
      staff_id: authenticatedStaff.id,
      is_owner: authenticatedStaff.is_owner,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      staff: {
        id: authenticatedStaff.id,
        name: authenticatedStaff.name,
        is_owner: authenticatedStaff.is_owner,
      },
    };
  }

  async logout(token: string): Promise<{ message: string }> {
    this.invalidatedTokens.add(token);
    return { message: 'Successfully logged out' };
  }

  isTokenInvalidated(token: string): boolean {
    return this.invalidatedTokens.has(token);
  }

  async validateStaff(staffId: string): Promise<any> {
    const staff = await this.prisma.staff.findUnique({
      where: { id: staffId },
      include: { store: true },
    });

    if (!staff || !staff.is_active) {
      return null;
    }

    return staff;
  }

  async hashPin(pin: string): Promise<string> {
    return bcrypt.hash(pin, 10);
  }
}
