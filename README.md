This is to demonstrate a bug in Headless UI's `Popover` component.

Run `parcel serve index.html` to build and serve the page.

1. Tab to the "Toggle" button.
2. Hit Space or Enter to click it and open the popover.
3. Tab once to focus the link.
4. Tab again, now **the button outside the shadow DOM is focused**. It should be on the "After popover" button.

If you remove the link from within the popover, instead the first Tab after step 2 focuses _nothing_ (apparently), then the next Tab focuses the button outside the shadow DOM.
