import axios, { AxiosResponse } from "axios";
import config from "../config";
import { User } from "../contexts/UserContext";
import { Story } from "../pages/StoriesPage/StoriesPage";

type GetUsers = () => Promise<AxiosResponse<{ users: User[] }>>;

type PostUser = (user: Partial<User>) => Promise<AxiosResponse<{ user: User; token: string }>>;

type GetStories = () => Promise<AxiosResponse<{ stories: Story[] }>>;

type DeleteStory = (title: string) => Promise<AxiosResponse>;

type PostStories = (stories: Story[]) => Promise<AxiosResponse<{ stories: Story[] }>>;

type PostPoints = (storyId: string, userId: string, points: string) => Promise<AxiosResponse<{ message: string }>>;

type GetPoints = (
  storyId: string
) => Promise<AxiosResponse<{ points: { storyId: string; userId: { name: string }; points: number }[] }>>;

export const instance = axios.create({
  baseURL: config.SERVER_URL + "/poker",
  headers: { Authorization: `Bearer ${config.BEARER}` },
});

export const getUsers: GetUsers = () => instance.get("/users");

export const postUser: PostUser = (user) => instance.post("/login", user);

export const getStories: GetStories = () => instance.get("/stories");

export const deleteStory: DeleteStory = (title) => instance.delete(`/stories/${title}`);

export const postStories: PostStories = (stories) => instance.post("/stories", { stories });

export const postPoints: PostPoints = (storyId, userId, points) =>
  instance.post("/points", { userId, points, storyId });

export const getPoints: GetPoints = (storyId) => instance.get(`/points/${storyId}`);
