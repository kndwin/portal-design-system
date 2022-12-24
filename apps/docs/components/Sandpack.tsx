import * as React from "react";
import { styled } from "classname-variants/react";
import { tokens } from "../../../packages/config/tokens";

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProviderProps,
} from "react-live";

export const Playground = (
  props: Pick<LiveProviderProps, "scope" | "code">
) => {
  return (
    <StyledContainer>
      <LiveProvider theme={theme} language="typescript" {...props}>
        <StyledLiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </StyledContainer>
  );
};

const StyledContainer = styled(
  "div",
  "grid grid-cols-2 gap-2 p-2 border border-dottenLine rounded-lg my-2"
);
const StyledLiveEditor = styled(LiveEditor, "rounded-lg font-mono");

Playground.displayName = "ReactLive";

const theme: LiveProviderProps["theme"] = {
  plain: {
    backgroundColor: tokens.colors.primary,
    color: tokens.colors.white,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: tokens.colors.tertiary,
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: tokens.colors.warning,
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "#ffcc99",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe",
      },
    },
  ],
};
