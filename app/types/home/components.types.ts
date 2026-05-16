import type { IconType } from 'react-icons';

export type CoreServiceCardProps = {
  description: string;
  featured?: boolean;
  icon: IconType;
  title: string;
  wide?: boolean;
};
