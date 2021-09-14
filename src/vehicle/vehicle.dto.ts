export class VehicleDto {
  name: String;
  vinCode: String;
  vinNumber: String;
  properties: {
    width: number;
    height: number;
    length: number;
    model: string;
    color: string;
    detailColor: string;
  };
  options: String[];
}
