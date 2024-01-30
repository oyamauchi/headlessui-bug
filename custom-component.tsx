import { Popover } from "@headlessui/react";
import * as React from "react";
import { createRoot } from "react-dom/client";

function ThingWithPopover() {
  return (
    <>
      <button type="button">Before popover</button>
      <Popover>
        <Popover.Button>Toggle</Popover.Button>
        <Popover.Panel>
          <a href="https://headlessui.com">Here's a link</a>
        </Popover.Panel>
      </Popover>
      <button type="button">After popover</button>
    </>
  );
}

class CustomComponent extends HTMLElement {
  constructor() {
    super();

    const shadowContainer = this.attachShadow({ mode: "open" });

    const root = document.createElement("div");
    shadowContainer.appendChild(root);

    const reactRoot = createRoot(root);
    reactRoot.render(<ThingWithPopover />);
  }
}

customElements.define("custom-component", CustomComponent);
