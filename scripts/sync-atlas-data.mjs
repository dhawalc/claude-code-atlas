import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const candidates = [
  process.env.ATLAS_SOURCE_DATA_DIR,
  "/home/dhawal/CC CLI/claude-code/docs/atlas/data",
  path.resolve(root, "../claude-code/docs/atlas/data"),
].filter(Boolean);

const sourceDir = candidates.find((candidate) => fs.existsSync(candidate));

if (!sourceDir) {
  console.error("No atlas data source directory found.");
  process.exit(1);
}

const targetDir = path.join(root, "data", "atlas");
fs.mkdirSync(targetDir, { recursive: true });

for (const file of fs.readdirSync(sourceDir)) {
  if (!file.endsWith(".json")) continue;
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
  console.log(`copied ${file}`);
}
