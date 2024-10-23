class AppError extends Error {
    public statusCode: number;
    public status: string;
    public isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message); // Call the parent Error class constructor with the message argument

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        // Capture the stack trace (useful for debugging purposes)
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
