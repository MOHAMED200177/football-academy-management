// customError.ts
export interface CustomError extends Error {
    code?: string; // Optional, since not all errors will have this
    statusCode: number;
    status: string;
    isOperational: boolean;
}
