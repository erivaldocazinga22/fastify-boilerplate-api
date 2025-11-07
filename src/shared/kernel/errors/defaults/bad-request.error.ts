import type { ZodIssue } from "zod/v3";
import { AppError } from "./base.error";

export class BadRequestError extends AppError {
	constructor(message = "Requisição inválida") {
		super(message, 400);
	}
}

export class ZodValidationError extends AppError {
	readonly issues: ZodIssue[];

	constructor(issues: ZodIssue[], message = "Erro de validação") {
		super(message, 400);
		this.issues = issues;

		Object.setPrototypeOf(this, ZodValidationError.prototype);
	}
}
