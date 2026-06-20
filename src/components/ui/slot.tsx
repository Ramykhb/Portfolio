"use client";

import * as React from "react";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      const child = children as React.ReactElement<Record<string, unknown>>;
      return React.cloneElement(child, {
        ...props,
        ...(child.props as Record<string, unknown>),
        ref,
      } as Record<string, unknown>);
    }
    if (React.Children.count(children) > 1) {
      React.Children.only(null);
    }
    return null;
  },
);
Slot.displayName = "Slot";
