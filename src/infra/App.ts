import { Tcp } from "./Tcp";

// import { IService } from "types/serves"; //помилка в конспекті !!!
import { IService } from "types/services"; //реально так !!!

export class App implements IService {
  private static instance: App;

  private tcp: IService = new Tcp(); // Екземпляр сервіса TCP

  constructor() {
    if (!App.instance) {
      App.instance = this;
    }

    return App.instance;
  }

  async init() {
    const { tcp } = this;
    console.log("App started");

    await tcp.init();

    return true;
  }
}
