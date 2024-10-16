import mongoose, { Model, Schema } from 'mongoose';
import { TFaq } from './faq.interface';

const faqSchema: Schema<TFaq> = new Schema<TFaq>(
  {
    question: { type: String, required: [true, 'Question is required.'] },
    answer: { type: String, required: [true, 'Answer is required.'] },
    date: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Faq: Model<TFaq> = mongoose.model<TFaq>('Faq', faqSchema);
