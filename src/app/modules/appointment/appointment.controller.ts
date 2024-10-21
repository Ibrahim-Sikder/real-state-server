import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { appointmentServices } from './appointment.service';

const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await appointmentServices.createAppointment(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointment book successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await appointmentServices.getAllAppointment(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointment are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await appointmentServices.deleteAppointment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointment deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const upateAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await appointmentServices.updateAppointment(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointment update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const appointmentControllers = {
  getAllAppointment,
  deleteAppointment,
  createAppointment,
  upateAppointment,
};
