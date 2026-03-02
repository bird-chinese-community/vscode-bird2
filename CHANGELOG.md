# Change Log

All notable changes to the "vscode-bird2-conf" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.2.0] - 2026-03-02

### 📝 Chores

- Update `CHANGELOG.md` with release notes

## [0.1.3] - 2026-03-02

### ♻️ Refactor

- Update grammar to the latest version (v1.0.8-20260301)
  - Reorder pattern includes for better matching priority
  - Add `protocol-phrases` support
  - Format `fileTypes` array for better readability

### 📝 Chores

- Update `@vscode/vsce` from `^3.6.0` to `^3.7.1`

## [0.1.2] - 2025-08-08

### 🐛 Bug Fixes

- Update `.vscodeignore` to exclude unnecessary files

## [0.1.1] - 2025-08-08

### ♻️ Refactor

- Update grammar to the latest version (v1.0.6-20250808)

## [0.1.0] - 2025-08-06

### 🆕 Features

- C-style block comment support (`/* … */`) for the Toggle Comment command
- `onEnter` rules implementing auto-indentation for brace blocks (`{}`)
- Folding markers for brace-delimited blocks (`{ ... }`)
- Native block comment support via `language-configuration.json`
- Enhanced auto-indentation through improved `onEnterRules` & `indentationRules`

### ♻️ Refactor

- Migrated `autoClosingPairs` to object syntax with `notIn` exclusions to prevent unwanted closures in strings/comments
- Extended folding markers to support `#region`/`#endregion` directives

### 🐛 Bug Fixes

- Maintain line-comment state during block comment toggling
- Corrected indentation irregularities at multi-line comment endings

## [0.0.4] - 2025-08-06

- Update workflow for auto publish

## [0.0.3] - 2025-08-06

- Update workflow for auto publish to Open VSX and VS Marketplace

## [0.0.2] - 2025-08-05

- Add workflow for auto publish to Open VSX and VS Marketplace
- Update README.md for better description

## [0.0.1] - 2025-08-05

- Initial release
