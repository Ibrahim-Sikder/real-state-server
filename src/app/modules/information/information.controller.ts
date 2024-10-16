import {  Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { InformationServices } from './information.service';
import { catchAsync } from '../../../utils/catchAsync';

const createInformation = catchAsync(async (req: Request, res: Response) => {
  const result = await InformationServices.createInformation(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Form submit successfully!',
    data: result,
  });
});
const getAllInformation = catchAsync(async (req: Request, res: Response) => {
  const result = await InformationServices.getAllInformation(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information are retrieved succesfully',
    data: result,
  });
});

const deleteInformation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InformationServices.deleteInformation(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information deleted successfully',
    data: result,
  });
});

export const InformationControllers = {
  getAllInformation,
  deleteInformation,
  createInformation,
};
