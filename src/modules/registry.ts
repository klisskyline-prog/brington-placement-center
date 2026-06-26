import type { PlacementModule } from "./types";
import type { TestId } from "../types";
import { eslModule } from "./esl/module";
import { ieltsModule } from "./ielts/module";
import { satModule } from "./sat/module";
import { createIntakeModule } from "./intake/moduleFactory";

export const placementModules: PlacementModule[] = [
  eslModule,
  ieltsModule,
  satModule,
  createIntakeModule("diploma", "Grade-level pathway review"),
  createIntakeModule("chinese", "Chinese Beginner"),
  createIntakeModule("ai", "AI Foundations"),
];

export const placementModuleMap = new Map<TestId, PlacementModule>(placementModules.map((module) => [module.id, module]));

export function getPlacementModule(id: TestId | "") {
  return id ? placementModuleMap.get(id) : undefined;
}

export function isValidTestId(value: string | null | undefined): value is TestId {
  if (!value) return false;
  return placementModuleMap.has(value.toLowerCase() as TestId);
}
