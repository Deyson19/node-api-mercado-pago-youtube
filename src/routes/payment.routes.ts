import { Router } from "express";
import {
  createOrder,
  success,
  failure,
  pending,
} from "../controllers/payment.controller";

const paymentRoutes = Router();

paymentRoutes.post("/create", createOrder);
paymentRoutes.get("/success", success);
paymentRoutes.get("/failure", failure);
paymentRoutes.get("/pending", pending);

export default paymentRoutes;
