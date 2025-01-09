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
    overview_Location: z.array(z.string()).optional(),
    map_location: z.array(z.string()).optional(),
    short_description: z.string().optional(),
    overview_description: z.string().optional(),
    concept_Location: z.array(z.string()).optional(),
    concept_description: z.string().optional(),
    floor_title: z.string().optional(),
    floor_Location: z.array(z.string()).optional(),
    floor_description: z.string().optional(),
    map_Location: z.array(z.string()).optional(),
    map_description: z.string().optional(),
    floorImages: z.array(z.string()).optional(),
    conceptImages: z.array(z.string()).optional(),
    special_amenities: z.array(z.string()).optional(),
    common_features: z.array(z.string()).optional(),
    home_loan_partner: z.array(z.string()).optional(),
    apartment_contains: z.array(z.string()).optional(),
    overviewImages: z.array(z.string()).optional(),
    locationImgs: z.array(z.string()).optional(),
    videoUrls: z.array(z.string()).optional(),
    category: z.string(),
    feature: z.boolean().optional(),
    high_budget: z.number().optional(),
    low_budget: z.number().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.array(z.string()).optional(),
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
    map_Location: z.array(z.string()).optional(),
    projectLocation:z.string().optional(),
    overview_Location: z.array(z.string()).optional(),
    short_description: z.string().optional(),
    overview_description: z.string().optional(),
    concept_Location: z.array(z.string()).optional(),
    concept_description: z.string().optional(),
    floor_title: z.string().optional(),
    floor_Location: z.array(z.string()).optional(),
    floor_description: z.string().optional(),
    map_description: z.string().optional(),
    floorImages: z.array(z.string()).optional(),
    conceptImages: z.array(z.string()).optional(),
    special_amenities: z.array(z.string()).optional(),
    common_features: z.array(z.string()).optional(),
    home_loan_partner: z.array(z.string()).optional(),
    apartment_contains: z.array(z.string()).optional(),
    overviewImages: z.array(z.string()).optional(),
    locationImgs: z.array(z.string()).optional(),
    videoUrls: z.array(z.string()).optional(),
    category: z.string().optional(),
    feature: z.boolean().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.array(z.string()).optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};
