import { IThemeManager, ReactWidget } from '@jupyterlab/apputils';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';
import React from 'react';

import { Chat } from '../components/chat';
import { chatIcon } from '../icons';
import { IChatModel } from '../model';

export function buildChatSidebar(
  chatModel: IChatModel,
  themeManager: IThemeManager | null,
  rmRegistry: IRenderMimeRegistry
): ReactWidget {
  const ChatWidget = ReactWidget.create(
    <Chat
      chatModel={chatModel}
      themeManager={themeManager}
      rmRegistry={rmRegistry}
    />
  );
  ChatWidget.id = 'jupyter-chat::side-panel';
  ChatWidget.title.icon = chatIcon;
  ChatWidget.title.caption = 'Jupyter Chat'; // TODO: i18n
  return ChatWidget;
}