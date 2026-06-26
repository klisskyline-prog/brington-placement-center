import type { TestId, TestVersion } from "../types";
import { isValidTestId } from "../modules/registry";

export function getInitialTestId(): TestId | "" {
  const params = new URLSearchParams(window.location.search);
  const test = params.get("test")?.toLowerCase();
  return isValidTestId(test) ? test : "";
}

export function getVersionOverride(): TestVersion | null {
  const params = new URLSearchParams(window.location.search);
  const version = params.get("version")?.toUpperCase();
  return version === "A" || version === "B" ? version : null;
}

export function getRandomVersion(): TestVersion {
  return Math.random() < 0.5 ? "A" : "B";
}
