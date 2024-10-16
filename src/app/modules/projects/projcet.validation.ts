import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    sub_title: z.string({
      required_error: 'Subtitle is required',
    }),
    project_type: z.string().optional(),
    project_address: z.string().optional(),
    land_area: z.string().optional(),
    storied: z.string().optional(),
    apartment_contains: z.string().optional(),
    overview_Location: z.array(z.string()).optional(),
    short_description: z.string().optional(),
    overview_description: z.string().optional(),
    concept_Location: z.array(z.string()).optional(),
    concept_description: z.string().optional(),
    floor_title: z.string().optional(),
    floor_Location: z.array(z.string()).optional(),
    floor_description: z.string().optional(),
    map_Location: z.array(z.string()).optional(),
    map_description: z.string().optional(),
    floorImage: z.string().optional(),
    conceptImage: z.string().optional(),
    overviewImage: z.string().optional(),
    videoUrls: z.array(z.string()),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    sub_title: z.string().optional(),
    project_type: z.string().optional(),
    project_address: z.string().optional(),
    land_area: z.string().optional(),
    storied: z.string().optional(),
    apartment_contains: z.string().optional(),
    overview_Location: z.array(z.string()).optional(),
    short_description: z.string().optional(),
    overview_description: z.string().optional(),
    concept_Location: z.array(z.string()).optional(),
    concept_description: z.string().optional(),
    floor_title: z.string().optional(),
    floor_Location: z.array(z.string()).optional(),
    floor_description: z.string().optional(),
    map_Location: z.array(z.string()).optional(),
    map_description: z.string().optional(),
    floorImage: z.string().optional(),
    conceptImage: z.string().optional(),
    overviewImage: z.string().optional(),
    videoUrls: z.array(z.string()).optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};
