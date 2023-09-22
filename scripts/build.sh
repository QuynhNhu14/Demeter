#!/bin/bash

# Define the root directory
root_dir="$(dirname "$(dirname "$(readlink -f "$0")")")"

# Navigate to the src/Demeter.Web directory
cd "$root_dir/src/Demeter.Web"

# Build the Vite React-TS project
echo "Building Vite React-TS project..."
npm run build

# Navigate back to the root directory
cd "$root_dir"

# Build the .NET solutions in the src/ directory
echo "Building .NET solutions..."
dotnet build "$root_dir/src/Demeter.sln"
