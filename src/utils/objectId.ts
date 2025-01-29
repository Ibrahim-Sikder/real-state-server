import mongoose from 'mongoose';

export const getQueryCondition = (id: string) => {
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
  return isValidObjectId ? { _id: id } : { slug: id };
};
