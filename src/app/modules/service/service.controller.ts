import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { serviceServices } from './services.service';


const createService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await serviceServices.createService(req.body);


    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await serviceServices.getAllService(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await serviceServices.getSinigleService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await serviceServices.deleteService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await serviceServices.updateService(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceControllers = {
  getAllService,
  getSingleService,
  deleteService,
  updateService,
   createService,
};
