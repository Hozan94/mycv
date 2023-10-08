import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  mileage: number;
  @Expose()
  approved: boolean;

  //If Transform() is not used,
  //and the prop 'userId' is not found inside the entity (report.entity),
  //this prop will not be sent back in the outgoing response

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
