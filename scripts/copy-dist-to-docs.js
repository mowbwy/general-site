import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const docsDir = join(__dirname, "..", "docs");

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const items = await readdir(src, { withFileTypes: true });

  for (const item of items) {
    const srcPath = join(src, item.name);
    const destPath = join(dest, item.name);

    if (item.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (item.isFile()) {
      await copyFile(srcPath, destPath);
    }
  }
}

async function syncDirs(src, dest) {
  await copyDir(src, dest);

  const destItems = await readdir(dest, { withFileTypes: true });
  for (const item of destItems) {
    const destPath = join(dest, item.name);
    const srcPath = join(src, item.name);
    try {
      await stat(srcPath);
    } catch {
      await rm(destPath, { recursive: true, force: true });
    }
  }
}

async function main() {
  try {
    await syncDirs(distDir, docsDir);
    console.log("Copied dist -> docs successfully.");
  } catch (error) {
    console.error("Failed to copy dist to docs:", error);
    process.exit(1);
  }
}

main();
