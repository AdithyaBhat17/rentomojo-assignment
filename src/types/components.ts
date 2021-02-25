import { ChangeEvent } from "react";

export interface SearchProps {
  updateSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export interface PostProps {
  id: number | string;
  title: string;
  children: string;
  userId: string | number;
}

export type CommentsData = {
  name: string;
  email: string;
  body: string;
  id: string;
};

export interface LoadingProps {
  message: string;
  width?: number;
  height?: number;
}

export interface MatchProps {
  userId: string;
  postId: string;
}

export type PostsData = {
  userId: number;
  title: string;
  body: string;
  id: string;
};
