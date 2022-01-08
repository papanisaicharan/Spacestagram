export class Camera {
  public id: number;
  public name: string;
  public rover_id: number;
  public full_name: string;

  constructor(id: number, name: string, rover_id: number, full_name: string) {
    this.full_name = full_name;
    this.id = id;
    this.name = name;
    this.rover_id = rover_id;
  }
}
