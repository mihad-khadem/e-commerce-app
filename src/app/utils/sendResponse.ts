// Send Response Utility

import { Response } from "express";
import HttpStatus from "http-status";

export interface IResponse<T> {
  success: string;
  statusCode?: number;
  message: string;
  data: T | null;
}

const sendResponse = <T>(res: Response, data: IResponse<T>): void => {
  res.status(data?.statusCode ?? HttpStatus.OK).json({
    statusCode: data?.statusCode,
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

// Export the sendResponse function
export default sendResponse;
