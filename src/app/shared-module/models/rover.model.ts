export class Rover {
  public id: number;
  public name: string;
  public landing_date: string;
  public launch_date: string;
  public status: string;

  constructor(
    id: number,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string
  ) {
    this.landing_date = landing_date;
    this.name = name;
    this.launch_date = launch_date;
    this.status = status;
    this.id = id;
  }
}
