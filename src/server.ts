import express, { Application } from "express";
import cors from "cors";
import path from "path";
import paymentRoutes from "./routes/payment.routes";
export class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    pago: "/api/pago",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? "3000";
    this.middlewares();
    this.routes();
  }
  private routes() {
    this.app.use(this.apiPaths.pago, paymentRoutes);
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.resolve("src/public")));
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto: ", this.port);
    });
  }
}
