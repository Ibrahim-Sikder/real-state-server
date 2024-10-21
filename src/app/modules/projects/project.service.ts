/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { projectSearchableField } from './project.constant';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProject = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(projectSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await projectQuery.countTotal();
  const projects = await projectQuery.modelQuery;

  return {
    meta,
    projects,
  };
};

const getSinigleProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};
const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.deleteOne({ _id: id });

  return result;
};

export const projectServices = {
  createProject,
  getAllProject,
  getSinigleProject,
  updateProject,
  deleteProject,
};
