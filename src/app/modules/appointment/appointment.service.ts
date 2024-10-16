/* eslint-disable @typescript-eslint/no-unused-vars */
import QueryBuilder from '../../builder/QueryBuilder';
import { appointmentSearch } from './appointment.constant';
import { TAppointment } from './appointment.interface';
import { Appointment } from './appointment.model';

const createAppointment = async (payload: TAppointment) => {
  const result = await Appointment.create(payload);
  return result;
};

const getAllAppointment = async (query: Record<string, unknown>) => {
  const appointmentQuery = new QueryBuilder(Appointment.find(), query)
    .search(appointmentSearch)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await appointmentQuery.countTotal();
  const appointments = await appointmentQuery.modelQuery;

  return {
    meta,
    appointments,
  };
};

const deleteAppointment = async (id: string) => {
  const result = await Appointment.deleteOne({ _id: id });
  return result;
};
const updateAppointment = async (
  id: string,
  payload: Partial<TAppointment>,
) => {
  const result = await Appointment.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const appointmentServices = {
  createAppointment,
  getAllAppointment,
  deleteAppointment,
  updateAppointment,
};
