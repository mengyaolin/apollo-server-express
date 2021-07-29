import { Request, Response } from 'express';

export const index = (request: Request, response: Response):void => {
  response.send({
    message: 'Welcome!',
  });
};
