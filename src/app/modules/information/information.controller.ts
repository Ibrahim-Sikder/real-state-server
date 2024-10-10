import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { InformationServices } from './information.service';

const createInformation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await InformationServices.createInformation(req.body);


    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Form submit successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllInformation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await InformationServices.getAllInformation(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Information are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteInformation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await InformationServices.deleteInformation(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Information deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};


export const InformationControllers = {
  getAllInformation,
  deleteInformation,
   createInformation,
};
