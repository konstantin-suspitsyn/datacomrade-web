export interface PagerDTO {
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  first: string;
  previous: string;
  next: string;
  last: string;
}
