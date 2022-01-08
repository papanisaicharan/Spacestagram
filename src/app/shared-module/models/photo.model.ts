import { Camera } from './camera.model';
import { Rover } from './rover.model';

export class Photo {
  public id: number;
  public sol: number;
  public camera: Camera;
  public img_src: string;
  public earth_date: string;
  public rover: Rover;
  public liked: boolean = false;

  constructor(
    id: number,
    sol: number,
    camera: Camera,
    img_src: string,
    earth_data: string,
    rover: Rover
  ) {
    this.camera = camera;
    this.img_src = img_src;
    this.id = id;
    this.sol = sol;
    this.earth_date = earth_data;
    this.rover = rover;
  }
}
