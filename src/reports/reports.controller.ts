import {
  Controller,
  Get,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { DailyReportQueryDto } from './dto/daily-report-query.dto';
import { DailyReportResponseDto } from './dto/daily-report-response.dto';

@Controller('api/reports')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('daily')
  @Roles('OWNER')
  @HttpCode(HttpStatus.OK)
  async getDailyReport(
    @Query() query: DailyReportQueryDto,
  ): Promise<DailyReportResponseDto> {
    const date = query.date || this.getTodayDateString();
    return this.reportsService.getDailyReport(date);
  }

  private getTodayDateString(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
}
