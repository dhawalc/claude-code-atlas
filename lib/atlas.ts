import featureFlagsData from "@/data/atlas/feature-flags.json";
import largestSourceFilesData from "@/data/atlas/largest-source-files.json";
import subsystemLocData from "@/data/atlas/subsystem-loc.json";
import summaryData from "@/data/atlas/summary.json";
import surfaceInventoryData from "@/data/atlas/surface-inventory.json";
import todoHotspotsData from "@/data/atlas/todo-hotspots.json";
import topLevelRootsData from "@/data/atlas/top-level-roots.json";

type RootStat = {
  root: string;
  files: number;
  lines: number;
};

type SubsystemStat = {
  name: string;
  dir: string;
  files: number;
  lines: number;
};

type LargestFile = {
  path: string;
  lines: number;
};

type FlagReference = {
  file: string;
  count: number;
};

type FeatureFlag = {
  flag: string;
  count: number;
  files: FlagReference[];
};

type TodoSample = {
  line: number;
  text: string;
};

type TodoHotspot = {
  path: string;
  total: number;
  tags: Record<string, number>;
  samples: TodoSample[];
};

type SurfaceInventory = {
  generatedAt: string;
  commands: { count: number; names: string[] };
  tools: { count: number; names: string[] };
  components: { count: number; names: string[] };
  hooks: { count: number; sample: string[] };
  webApiRoutes: { count: number; files: string[] };
  notableRoots: Array<{ dir: string; files: number; lines: number }>;
};

type Summary = {
  generatedAt: string;
  thesis: string;
  metrics: {
    trackedRoots: number;
    totalTrackedFiles: number;
    totalTrackedLines: number;
    commandDirs: number;
    toolDirs: number;
    componentDirs: number;
    hookFiles: number;
    webApiRoutes: number;
    buildFlags: number;
    todoMarkers: number;
  };
};

export type SourceAnchor = {
  label: string;
  path?: string;
  line?: number;
  href?: string;
};

export const summary = summaryData as Summary;
export const topLevelRoots = topLevelRootsData as RootStat[];
export const subsystemLoc = subsystemLocData as SubsystemStat[];
export const largestSourceFiles = largestSourceFilesData as LargestFile[];
export const featureFlags = featureFlagsData as FeatureFlag[];
export const todoHotspots = todoHotspotsData as TodoHotspot[];
export const surfaceInventory = surfaceInventoryData as SurfaceInventory;

export const featuredFlags = featureFlags.slice(0, 8);
export const sourceRepoUrl = "https://github.com/nirholas/claude-code";

export function sourceRepoFileUrl(path: string) {
  return sourceRepoUrl + "/blob/main/" + path;
}

export function sourceRepoLineUrl(path: string, line?: number) {
  return sourceRepoFileUrl(path) + (line ? "#L" + line : "");
}

export function resolveSourceAnchorHref(anchor: SourceAnchor) {
  if (anchor.href) return anchor.href;
  if (anchor.path) return sourceRepoLineUrl(anchor.path, anchor.line);
  return sourceRepoUrl;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: value >= 1000 ? "compact" : "standard",
    maximumFractionDigits: value >= 1000 ? 1 : 0,
  }).format(value);
}
