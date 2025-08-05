# BIRD2 Configuration - VS Code Extension

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/items?itemName=bird-chinese-community.vscode-bird2-conf)
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![GitHub issues](https://img.shields.io/github/issues/bird-chinese-community/vscode-bird2-conf)](https://github.com/bird-chinese-community/vscode-bird2-conf/issues)

Professional syntax highlighting support for BIRD2 routing daemon configuration files in Visual Studio Code.

**[English](#english) | [中文](#中文)**

---

## English

### Overview

This VS Code extension provides comprehensive syntax highlighting for BIRD2 (BIRD Internet Routing Daemon version 2) configuration files. BIRD2 is a powerful routing daemon supporting BGP, OSPF, RIP, and other routing protocols commonly used in network infrastructure.

### Features

- **Comprehensive Syntax Highlighting**: Full support for BIRD2 configuration syntax including:

  - Protocol definitions (BGP, OSPF, RIP, Babel, etc.)
  - Filter and function definitions
  - Template definitions
  - IP addresses and network prefixes
  - BGP path expressions
  - VPN Route Distinguishes (RD)
  - Comments and block structures

- **Multiple File Format Support**:

  - `.conf` - Standard configuration files
  - `.bird` - BIRD-specific configuration files
  - `.bird2` - BIRD2-specific configuration files
  - `.bird3` - BIRD3-specific configuration files
  - `.bird2.conf` and `.bird3.conf` - Versioned configuration files

### Installation

1. **From VS Code Marketplace**:

   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "BIRD2 Configuration"
   - Click Install

2. **Manual Installation**:
   - After downloading the vsix installation package from Release, manually install the plugin in VSCode.

### Usage

Once installed, the extension automatically provides syntax highlighting for supported file types. Simply open any BIRD2 configuration file and enjoy enhanced syntax highlighting.

### Requirements

- Visual Studio Code 1.80.0 or higher
- No additional dependencies required

### Configuration

This extension works out of the box with no additional configuration needed. The syntax highlighting rules are automatically applied to supported file types.

### Syntax Grammar

This extension uses professional TextMate grammar definitions maintained by the [BIRD Chinese Community](https://github.com/bird-chinese-community/BIRD-tm-language-grammar). The grammar is included as a Git submodule and regularly updated to support the latest BIRD2 features.

### Contributing

Contributions are welcome! Please feel free to:

- Report bugs or request features in [Issues](https://github.com/bird-chinese-community/vscode-bird2-conf/issues)
- Submit pull requests for improvements
- Contribute to the underlying [grammar definitions](https://github.com/bird-chinese-community/BIRD-tm-language-grammar)

### License

This project is licensed under the Mozilla Public License 2.0 - see the [LICENSE](LICENSE) file for details.

### Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/bird-chinese-community/vscode-bird2-conf/issues)
- **Community**: Join the [BIRD Chinese Community](https://github.com/bird-chinese-community)

---

## 中文

### 概述

这个 VS Code 扩展为 BIRD2 配置文件提供全面的语法高亮支持。BIRD2 是一个强大的路由守护进程，支持 BGP、OSPF、RIP 等多种路由协议，广泛用于网络基础设施。

### 功能特性

- **全面的语法高亮**：完整支持 BIRD2 配置语法，包括：

  - 协议定义（BGP、OSPF、RIP、Babel 等）
  - 过滤器和函数定义
  - 模板定义
  - IP 地址和网络前缀
  - BGP 路径表达式
  - VPN 路由区分符（RD）
  - 注释和块结构

- **多种文件格式支持**：

  - `.conf` - 标准配置文件
  - `.bird` - BIRD 专用配置文件
  - `.bird2` - BIRD2 专用配置文件
  - `.bird3` - BIRD3 专用配置文件
  - `.bird2.conf` 和 `.bird3.conf` - 版本化配置文件

### 安装方法

1. **从 VS Code 应用商店安装**：

   - 打开 VS Code
   - 转到扩展 (Ctrl+Shift+X)
   - 搜索 "BIRD2 Configuration"
   - 点击安装

2. **手动安装**：
   - 从 Release 中下载 vsix 安装包后手动于 VSCode 中安装插件。

### 使用方法

安装后，扩展会自动为支持的文件类型提供语法高亮。只需打开任何 BIRD2 配置文件即可享受增强的语法高亮效果。

### 系统要求

- Visual Studio Code 1.80.0 或更高版本
- 无需其他依赖

### 配置

此扩展开箱即用，无需额外配置。语法高亮规则会自动应用于支持的文件类型。

### 语法定义

此扩展使用由 [BIRD 中文社区](https://github.com/bird-chinese-community/BIRD-tm-language-grammar) 维护的专业 TextMate 语法定义。语法定义作为 Git 子模块包含，并定期更新以支持最新的 BIRD2 功能。

### 贡献

欢迎贡献！您可以：

- 在 [Issues](https://github.com/bird-chinese-community/vscode-bird2-conf/issues) 中报告错误或请求功能
- 提交改进的拉取请求
- 为底层 [语法定义](https://github.com/bird-chinese-community/BIRD-tm-language-grammar) 做贡献

### 许可证

此项目采用 Mozilla Public License 2.0 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

### 支持

- **GitHub Issues**：[报告错误或请求功能](https://github.com/bird-chinese-community/vscode-bird2-conf/issues)
- **社区**：加入 [BIRD 中文社区](https://github.com/bird-chinese-community)
