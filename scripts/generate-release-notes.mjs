#!/usr/bin/env node

import { readFile } from "node:fs/promises";

async function generateReleaseNotes() {
  try {
    const pkgRaw = await readFile("package.json", "utf8");
    const changelogRaw = await readFile("CHANGELOG.md", "utf8");

    const { name, displayName = name, version, publisher, description = "" } = JSON.parse(pkgRaw);
    const deployReason = process.env.DEPLOY_REASON || "unknown";
    const isForceMode = deployReason === "force";

    // match the version section in CHANGELOG.md
    const match = changelogRaw.match(new RegExp(`## ${version.replace(/\./g, "\\.")}\\n+([\\s\\S]+?)(?=\\n## |$)`));

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

    const delimiter = "EOF";
    console.log(`::set-output name=content<<${delimiter}`);
    console.log(notes);
    console.log(delimiter);

    console.log(`::set-output name=title::${displayName} v${version}`);
  } catch (err) {
    console.error("❌ Error generating release notes:", err);
    process.exit(1);
  }
}

generateReleaseNotes();
