/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';

import { TFaq } from './faq.interface';
import { Faq } from './faq.model';
import { AppError } from '../../error/AppError';
import QueryBuilder from '../../builder/QueryBuilder';
import { FaqSearch } from './faq.constant';

const createFaq = async (payload: TFaq) => {
  const newFaq = await Faq.create(payload);
  return newFaq;
};

const getAllFaq = async (query: Record<string, unknown>) => {
  const serviceQuery = new QueryBuilder(Faq.find(), query)
    .search(FaqSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await serviceQuery.countTotal();
  const faqs = await serviceQuery.modelQuery;

  return {
    meta,
    faqs,
  };
};

const updateFaq = async (id: string, payload: Partial<TFaq>) => {
  const result = await Faq.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteFaq = async (id: string) => {
  const faq = await Faq.findByIdAndDelete(id);

  if (!faq) {
    throw new AppError(StatusCodes.NOT_FOUND, 'No faq available');
  }

  return faq;
};
const getSinigleFaq = async (id: string) => {
  const result = await Faq.findById(id);
  return result;
};

export const FaqServices = {
  createFaq,
  getAllFaq,
  updateFaq,
  deleteFaq,
  getSinigleFaq,
};
