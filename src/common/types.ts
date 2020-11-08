import { FC } from 'react';

export interface IRouteWithComponent<T> {
  path: T;
  component: FC;
}

export interface IProfile {
  lastName: string;
  numberOfGroup: string;
}

export interface ILoginFormData {
  lastName: string;
  numberOfGroup: string;
}

export interface ITestData {
  label: string;
  additionalFields: string[];
  name: string;
  value: string;
}

export interface IResult {
  lastName: string;
  rating: string;
}
