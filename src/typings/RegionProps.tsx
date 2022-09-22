export interface RegionProps {
  id: string;
  inner: RegionProps[] | null;
  name: string;
}
