class AppError extends Error {
    public statusCode: number;
    public status: string;
    public isOperational: boolean;
    code?: string;

    constructor(message: string, statusCode: number) {
        super(message); // Call the parent Error class constructor with the message

        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error'; // Set status based on statusCode
        this.isOperational = true; // Indicates this is an operational error

        // Capture the stack trace, if available
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default AppError;
