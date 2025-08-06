#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import fs from "node:fs";

async function checkVersion() {
  try {
    // Read current package.json
    const packageData = await readFile("package.json", "utf8");
    const pkg = JSON.parse(packageData);

    const { name, version, publisher } = pkg;

    console.log(`📦 Extension: ${publisher}.${name}`);
    console.log(`🔖 Current version: ${version}`);

    // Check Open VSX API
    const response = await fetch(`https://open-vsx.org/api/${publisher}/${name}`);

    let publishedVersion = "0.0.0";

    if (response.ok) {
      const data = await response.json();
      publishedVersion = data.version || "0.0.0";
    } else if (response.status === 404) {
      console.log("📝 Extension not found on Open VSX (first release)");
    } else {
      console.log(`⚠️  API error: ${response.status}`);
    }

    console.log(`🌐 Open VSX version: ${publishedVersion}`);

    // Determine if we should deploy
    const shouldDeploy = version !== publishedVersion;
    const isForceMode = process.env.FORCE_DEPLOY === "true";
    const outputFile = process.env.GITHUB_OUTPUT;
    if (!outputFile) {
      throw new Error("GITHUB_OUTPUT environment variable not set.");
    }

    if (isForceMode) {
      console.log("🚀 Force deploy mode enabled");
      fs.appendFileSync(outputFile, 'should-deploy=true\n');
      fs.appendFileSync(outputFile, 'deploy-reason=force\n');
    } else if (shouldDeploy) {
      console.log(`✅ Version changed: ${publishedVersion} → ${version}`);
      fs.appendFileSync(outputFile, 'should-deploy=true\n');
      fs.appendFileSync(outputFile, 'deploy-reason=version-change\n');
    } else {
      console.log(`ℹ️  No deployment needed (version ${version} already exists)`);
      fs.appendFileSync(outputFile, 'should-deploy=false\n');
      fs.appendFileSync(outputFile, 'deploy-reason=no-change\n');
    }

    // Set additional outputs for other jobs
    fs.appendFileSync(outputFile, `version=${version}\n`);
    fs.appendFileSync(outputFile, `tag-name=v${version}\n`);
    fs.appendFileSync(outputFile, `extension-name=${name}\n`);
    fs.appendFileSync(outputFile, `display-name=${pkg.displayName || name}\n`);
  } catch (error) {
    console.error("❌ Error checking version:", error);
    process.exit(1);
  }
}

checkVersion();
