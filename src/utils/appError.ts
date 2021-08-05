export class AppError extends Error {
    statusCode: number;
    statusText: string;
    message: string;
    constructor(statusCode?: number, statusText?: string, message?: string) {
        super();
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.message = message;
    }
}