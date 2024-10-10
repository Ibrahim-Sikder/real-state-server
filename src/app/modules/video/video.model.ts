import { Schema, model } from 'mongoose';
import { TVideo } from './video.interface';

const VideoSchema = new Schema<TVideo>(
  {
    image: {
      type: String,
    },
    video_title_bangla: {
      type: String,
    },
    video_title_english: {
      type: String,
    },
    video_url: {
      type: String,
      required: [true, 'Video URL is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const Video = model<TVideo>('Video', VideoSchema);
