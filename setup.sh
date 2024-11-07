#!/bin/bash

# Initialize a new npm project
npm init -y

# Install Remotion and its dependencies
npm install remotion @remotion/cli

# Initialize a new Remotion project with TypeScript
npx remotion create remotion-project --typescript

# Move contents up one directory
mv remotion-project/* .
mv remotion-project/.* . 2>/dev/null || true
rmdir remotion-project

# Install additional dependencies
npm install @remotion/cli --save-dev 