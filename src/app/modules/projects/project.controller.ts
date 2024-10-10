import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { projectServices } from './project.service';

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.createProject(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project create succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.getAllProject(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await projectServices.getSinigleProject(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await projectServices.deleteProject(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await projectServices.updateProject(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project update succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const projectControllers = {
  getAllProject,
  getSingleProject,
  deleteProject,
  updateProject,
  createProject,
};
