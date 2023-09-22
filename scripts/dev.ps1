# Define the root directory
$scriptPath = $MyInvocation.MyCommand.Path
$rootDir = (Get-Item -Path $scriptPath | Resolve-Path).Path | Split-Path -Parent

Write-Host "Directory: $rootDir"

# Define the path to the web project
$webProjectPath = Join-Path -Path $rootDir -ChildPath "src/Demeter.Web"

# Check if the web project directory exists
if (-not (Test-Path -Path $webProjectPath -PathType Container)) {
    Write-Host "Error: Web project directory not found at $webProjectPath"
    exit 1
}

# Run the .NET solution in the background (if needed)
Start-Process -FilePath "dotnet" -ArgumentList "run --project '$webProjectPath'" -NoNewWindow -Wait

# Wait for a moment to allow the .NET application to start (you can adjust the sleep time)
Start-Sleep -Seconds 5

# Navigate to the web project directory
Set-Location -Path $webProjectPath

# Start the Vite React-TS development server
Write-Host "Starting Vite React-TS project..."
npm run dev
