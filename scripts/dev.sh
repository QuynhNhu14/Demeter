#!/bin/bash

# Define the root directory
root_dir="$(dirname "$(dirname "$(readlink -f "$0")")")"

echo "Directory: $root_dir"

# Define the path to the web project
web_project_path="$root_dir/src/Demeter.Web"

# Check if the web project directory exists
if [ ! -d "$web_project_path" ]; then
  echo "Error: Web project directory not found at $web_project_path"
  exit 1
fi

# Run the .NET solution in the background (if needed)
dotnet run --project "$web_project_path" &

# Wait for a moment to allow the .NET application to start
sleep 5

# Navigate to the web project directory
cd "$web_project_path"

# Start the Vite React-TS development server
echo "Starting Vite React-TS project..."
npm run dev
