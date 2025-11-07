import { AppError } from "./base.error";

export class InternalServerError extends AppError {
	constructor(message = "Erro interno do servidor") {
		super(message, 500, false);
	}
}