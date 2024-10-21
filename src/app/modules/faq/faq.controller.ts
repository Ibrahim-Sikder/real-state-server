import { StatusCodes } from 'http-status-codes';

import { FaqServices } from './faq.service';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const createFaq = catchAsync(async (req, res) => {
  const faq = await FaqServices.createFaq(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'FAQ created successful!',
    data: faq,
  });
});



const getAllFaq = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FaqServices.getAllFaq(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateFaq = catchAsync(async (req, res) => {
  const { id } = req.params;

  const service = await FaqServices.updateFaq(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faq update successful!',
    data: service,
  });
});
const deleteFaq = catchAsync(async (req, res) => {
  const { id } = req.params;

  const service = await FaqServices.deleteFaq(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faq deleted successful!',
    data: service,
  });
});
const getSingleFaq = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await FaqServices.getSinigleFaq(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'About is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const faqController = {
  createFaq,
  getAllFaq,
  updateFaq,
  deleteFaq,
  getSingleFaq
};
