/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { teamSearch } from './team.constant';
import { TTeam } from './team.interface';
import { Team } from './team.model';

const createTeam = async (payload: TTeam) => {
  const result = await Team.create(payload);
  return result;
};

const getAllTeam = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Team.find(), query)
    .search(teamSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await projectQuery.countTotal();
  const teams = await projectQuery.modelQuery;

  return {
    meta,
    teams,
  };
};
const getSinigleTeam = async (id: string) => {
  const result = await Team.findById(id);
  return result;
};
const updateTeam = async (id: string, payload: Partial<TTeam>) => {
  const result = await Team.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTeam = async (id: string) => {
  const result = await Team.deleteOne({ _id: id });

  return result;
};

export const teamServices = {
  createTeam,
  getAllTeam,
  getSinigleTeam,
  updateTeam,
  deleteTeam,
};
