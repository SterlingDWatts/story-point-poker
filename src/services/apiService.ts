import axios, { AxiosResponse } from "axios";
import config from "../config";
import { User } from "../contexts/UserContext";
import { Story } from "../pages/StoriesPage/StoriesPage";

interface UserRes {
  users: User[];
}

export const instance = axios.create({
  baseURL: config.SERVER_URL + "/poker",
  headers: { Authorization: `Bearer ${config.BEARER}` },
});

interface StoriesRes {
  stories: Story[];
}

export const getUsers = (): Promise<AxiosResponse<UserRes>> => instance.get("/users");

export const getStories = (): Promise<AxiosResponse<StoriesRes>> => instance.get("/stories");

export const postStories = (stories: Story[]): Promise<AxiosResponse<Story[]>> =>
  instance.post("/stories", { stories });
