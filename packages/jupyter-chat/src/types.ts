/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/**
 * The user description.
 */
export interface IUser {
  id: string;
  username?: string;
  name?: string;
  display_name?: string;
  initials?: string;
  color?: string;
  avatar_url?: string;
}

/**
 * The configuration interface.
 */
export interface IConfig {
  sendWithShiftEnter?: boolean;
  lastRead?: number;
}

/**
 * The chat message decription.
 */
export interface IChatMessage {
  type: 'msg';
  body: string;
  id: string;
  time: number;
  sender: IUser;
}

export type IClearMessage = {
  type: 'clear';
};

export type IMessage = IChatMessage | IClearMessage;

/**
 * The chat history interface.
 */
export interface IChatHistory {
  messages: IChatMessage[];
}

/**
 * The content of a new message.
 */
export interface INewMessage {
  body: string;
  id?: string;
}

/**
 * An empty interface to describe optional settings taht could be fetched from server.
 */
export interface ISettings {}
