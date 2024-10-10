import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { teamServices } from './team.service';


const createTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await teamServices.createTeam(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Team create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await teamServices.getAllTeam(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Team are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await teamServices.getSinigleTeam(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Team is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await teamServices.deleteTeam(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Team deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await teamServices.updateTeam(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Team update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const teamControllers = {
  getAllTeam,
  getSingleTeam,
  deleteTeam,
  updateTeam,
  createTeam,
};
