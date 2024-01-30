import { Popover } from "@headlessui/react";
import * as React from "react";
import { createRoot } from "react-dom/client";

function ThingWithPopover() {
  return (
    <div style={{ border: "1px solid black" }}>
      <button type="button">Before popover</button>
      <Popover>
        <Popover.Button>Toggle</Popover.Button>
        <Popover.Panel>
          <a href="https://headlessui.com">Here's a link</a>
        </Popover.Panel>
      </Popover>
      <button type="button">After popover</button>
    </div>
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
