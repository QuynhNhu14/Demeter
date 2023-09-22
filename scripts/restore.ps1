# Define the root directory
$scriptPath = $MyInvocation.MyCommand.Path
$rootDir = (Get-Item -Path $scriptPath | Resolve-Path).Path | Split-Path -Parent

# Navigate to the src/ directory
Set-Location -Path "$rootDir/src"

# Iterate over each directory in src/
foreach ($projectDir in Get-ChildItem -Directory) {
    if (Test-Path -Path $projectDir.FullName) {
        # Check if it's a .NET project (contains a .csproj file)
        if (Test-Path -Path "$projectDir\*.csproj") {
            # Run dotnet restore
            Write-Host "Restoring .NET project in $($projectDir.FullName)"
            dotnet restore
        }
    }
}

# Check if it's a directory
if (Test-Path -Path "$rootDir/src/Demeter.Web" -PathType Container) {
    # Navigate to the Demeter.Web directory
    Set-Location -Path "$rootDir/src/Demeter.Web"
    # Run npm ci
    Write-Host "Running 'npm ci' in Demeter.Web"
    npm ci
}

# Return to the original directory
Set-Location -Path $rootDir
