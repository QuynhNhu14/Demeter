// environment.ts

interface EnvironmentConfig {
    apiUrl: string;
    port: string;
    DEMETERUrl: string;
  }
  
  const getEnvironmentConfig = (): EnvironmentConfig => {
    // Environment-specific logic
    const defaultPort = '5029'; // Default port if not specified
    const apiUrl = import.meta.env.DEMETER_URL ? `https://${import.meta.env.DEMETER_URL}` : `http://localhost:${defaultPort}`;

  
    return {
      apiUrl: `${apiUrl}/api`,
      port: import.meta.env.PORT as string ?? defaultPort,
      DEMETERUrl: import.meta.env.DEMETER_URL as string ?? 'localhost'
    };
  };
  
  export const environment = getEnvironmentConfig();
  