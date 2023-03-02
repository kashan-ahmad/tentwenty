export type Case = {
  id: number;
  name: string;
  slug: string;
  client?: string;
  hasApp?: boolean;
  hasWebsite?: boolean;
  color: string;
};
