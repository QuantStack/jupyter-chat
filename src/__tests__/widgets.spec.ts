/**
 * Example of [Jest](https://jestjs.io/docs/getting-started) unit tests
 */

import { IRenderMimeRegistry, RenderMimeRegistry } from "@jupyterlab/rendermime";
import { ChatModel, IChatModel } from "../model";
import { ChatWidget } from "../widgets/chat-widget";

describe('test chat widget', () => {
  let model: IChatModel;
  let rmRegistry: IRenderMimeRegistry;

  beforeEach(() => {
    model = new ChatModel();
    rmRegistry = new RenderMimeRegistry();
  })

  describe('model instantiation', () => {
    it('should create a ChatModel', () => {
      const widget = new ChatWidget({ model, rmRegistry });
      expect(widget).toBeInstanceOf(ChatWidget);
    });

    it('should dispose a ChatModel', () => {
      const widget = new ChatWidget({ model, rmRegistry });
      widget.dispose()
      expect(widget.isDisposed).toBeTruthy();
    });

    it('should provides the model', () => {
      const widget = new ChatWidget({ model, rmRegistry });
      expect(widget.model).toBe(model);
    });
  });
});
