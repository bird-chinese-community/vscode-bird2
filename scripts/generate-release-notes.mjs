#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { appendFileSync } from "node:fs";

async function generateReleaseNotes() {
  try {
    const pkgRaw = await readFile("package.json", "utf8");
    const changelogRaw = await readFile("CHANGELOG.md", "utf8");

    const { name, displayName = name, version, publisher, description = "" } = JSON.parse(pkgRaw);
    const deployReason = process.env.DEPLOY_REASON || "unknown";
    const isForceMode = deployReason === "force";

    // match the version section in CHANGELOG.md
    const pattern = new RegExp(
      `^##\\s+\\[?${version.replace(/\./g, "\\.")}\\]?[^\\n]*\\n+([\\s\\S]+?)(?=^##\\s+\\[?\\d|\\Z)`,
      "m"
    );
    const match = changelogRaw.match(pattern);
    const changes = match?.[1].trim() || "- No changes found.";

    let notes = `## What's New in v${version}\n\n`;

    notes += isForceMode
      ? "**Deployment**: 🚀 Force Deploy (Manual)\n\n"
      : "**Deployment**: 🔄 Auto Deploy (Version Change)\n\n";

    if (description) {
      notes += `${description}\n\n`;
    }

    notes += `### Changes\n\n${changes}\n\n`;

    notes += `## Installation\n\n`;
    notes += `### VS Code Marketplace\nAvailable on [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=${publisher}.${name})\n\n`;
    notes += `### Open VSX Registry\nAvailable on [Open VSX Registry](https://open-vsx.org/extension/${publisher}/${name})\n`;

    console.log("✅ Release notes generated successfully");
    console.log(notes);

    const outputFile = process.env.GITHUB_OUTPUT;
    if (!outputFile) {
      throw new Error("GITHUB_OUTPUT environment variable not set.");
    }

    appendFileSync(outputFile, `title=${displayName} v${version}\n`);
    appendFileSync(outputFile, `content<<EOF\n${notes}\nEOF\n`);
  } catch (err) {
    console.error("❌ Error generating release notes:", err);
    process.exit(1);
  }
}

generateReleaseNotes();
