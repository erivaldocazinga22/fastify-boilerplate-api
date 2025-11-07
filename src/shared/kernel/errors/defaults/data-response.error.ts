import { AppError } from "./base.error";

export class NotFoundError extends AppError {
	constructor(message = "Recurso não encontrado") {
		super(message, 404);
	}
}

export class ConflictError extends AppError {
	constructor(message = "Conflito de dados") {
		super(message, 409);
	}
}

export class AlreadyExistsError extends AppError {
	constructor(message = "Entidade já está registrada") {
		super(message, 409);
	}
}