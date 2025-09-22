import type { PagerDTO } from "../../components/commondto/pager";

export interface DomainsAllDTO {
  data: DomainDTO[];
  paging: PagerDTO;
}

export interface DomainDTO {
  id: number;
  name: string;
  description: {
    String: string;
    Valid: boolean;
  };
  user_id: number;
  created_at: Date;
  updated_at: Date;
}
