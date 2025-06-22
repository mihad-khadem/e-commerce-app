// catch async function and handle errors
import { Request, Response, NextFunction } from "express";
export function catchAsync(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error) => {
      console.error("Error in catchAsync:", error);
      next(error); // Pass the error to the global error handler
    });
  };
}
