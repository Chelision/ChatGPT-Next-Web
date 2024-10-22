#!/bin/bash

# 定义项目目录
# CURRENT_DIR=$(pwd)
# PROJECT_DIR="/path/to/your/workspace/Chatgpt-Next-Web"  # 替换为你的实际路径

# 切换到项目目录
# cd $PROJECT_DIR || { echo "Directory not found: $PROJECT_DIR"; exit 1; }

# 安装依赖
echo "Installing dependencies..."
yarn dev
