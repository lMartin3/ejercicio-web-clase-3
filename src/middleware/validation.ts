import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validateBody<T extends Object>(cls: ClassConstructor<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const instance = plainToInstance(cls, req.body, { enableImplicitConversion: true });
      const errors = await validate(instance, { whitelist: true, forbidNonWhitelisted: true });

      if (errors.length > 0) {
        const formatted = errors.map(e => ({
          property: e.property,
          constraints: e.constraints,
        }));
        return res.status(400).json({ message: "Validation failed", errors: formatted });
      }

      req.body = instance as any;
      next();
    } catch (err) {
      return res.status(500).json({ message: "Validation middleware error", error: (err as Error).message });
    }
  };
}
