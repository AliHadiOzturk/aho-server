export class AppError implements Error {
    status: number;
    statusText: string;
    message: string;
    name: string;
    stack?: string;
    constructor(status?: number, statusText?: string, message?: string) {
        this.status = status;
        this.statusText = statusText;
        this.message = message;
    }
}