/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { informationSearch } from './information.constant';
import { TInformation } from './information.interface';
import { Information } from './information.model';

const createInformation = async (payload: TInformation) => {
  const result = await Information.create(payload);
  return result;
};

const getAllInformation = async (query: Record<string, unknown>) => {
  const prisonQuery = new QueryBuilder(Information.find(), query)
    .search(informationSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await prisonQuery.countTotal();
  const informations = await prisonQuery.modelQuery;

  return {
    meta,
    informations,
  };
};



const deleteInformation = async (id: string) => {
  const result = await Information.deleteOne({ _id: id });
  return result;
};

export const InformationServices = {
  createInformation,
  getAllInformation,
  deleteInformation,
};
