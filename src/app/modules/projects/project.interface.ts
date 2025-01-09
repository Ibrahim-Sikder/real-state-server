export type TProject = {
  title: string;
  sub_title: string;
  project_type: string;
  project_offer:string;
  project_address: string;
  land_area: string;
  storied: string;
  overview_Location: string[];
  short_description: string;
  sub_short_description: string;
  overview_description: string;
  concept_Location?: string[];
  concept_description?: string;
  floor_title?: string;
  projectLocation?: string;
  map_Location?: string[];
  floor_Location?: string[];
  floor_description?: string;
  map_description?: string;
  floorImages?: string[];
  locationImgs?: string[];
  conceptImages?: string[];
  overviewImages?: string[];
  videoUrls?: string[];
  feature:boolean,
  category:string,
  looking_for:string,
  meta_title: string;
  meta_keywords: string[];
  meta_description: string;
  apartment_contains:string[];
  special_amenities:string[];
  common_features:string[];
  home_loan_partner:string[],
  brochure_link:string,
  project_date:string;
  projectCategoryType:string;
  virtual_Location:string[]
};

