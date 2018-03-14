export interface Page {

  url: string;
  title: string;
  created_at: string;
  updated_at: string;
  editing_roles: string;
  last_edited_by?: {
    id: number;
    display_name: string;
    avatar_image_url: string;
    html_url: string;
  };
  body: string;
  published: boolean;
  front_page: boolean;
  locked_for_user: boolean;
  lock_info?: string;
  lock_explanation?: string;

}

export interface PageReq {

  title: string;
  body?: string;
  editing_roles?: string;
  notify_of_update?: boolean;
  published?: boolean;
  front_page?: boolean;

}

export enum PageState {

  Empty = 1,
  Fresh,
  Updated,
  Deleted

}

export interface CanvasPageData {

  url?: string;
  title?: string;
  body?: string;
  published?: boolean;
  front_page?: boolean;

}

export interface ListOpts {

  sort?: "title"|"created_at"|"updated_at";
  order?: "asc"|"dec";
  search_term?: string;
  published?: boolean;

}
