#!/usr/bin/env node

import { readFile } from "node:fs/promises";

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

    if (isForceMode) {
      console.log("🚀 Force deploy mode enabled");
      console.log("::set-output name=should-deploy::true");
      console.log("::set-output name=deploy-reason::force");
    } else if (shouldDeploy) {
      console.log(`✅ Version changed: ${publishedVersion} → ${version}`);
      console.log("::set-output name=should-deploy::true");
      console.log("::set-output name=deploy-reason::version-change");
    } else {
      console.log(`ℹ️  No deployment needed (version ${version} already exists)`);
      console.log("::set-output name=should-deploy::false");
      console.log("::set-output name=deploy-reason::no-change");
    }

    // Set additional outputs for other jobs
    console.log(`::set-output name=version::${version}`);
    console.log(`::set-output name=tag-name::v${version}`);
    console.log(`::set-output name=extension-name::${name}`);
    console.log(`::set-output name=display-name::${pkg.displayName || name}`);
  } catch (error) {
    console.error("❌ Error checking version:", error);
    process.exit(1);
  }
}

checkVersion();
