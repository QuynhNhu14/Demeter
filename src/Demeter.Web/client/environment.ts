// environment.ts

interface EnvironmentConfig {
    apiUrl: string;
    port: string;
    vercelUrl: string;
  }
  
  const getEnvironmentConfig = (): EnvironmentConfig => {
    // Environment-specific logic
    const defaultPort = '5029'; // Default port if not specified
    const apiUrl = import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : `http://localhost:${defaultPort}`;

  
    return {
      apiUrl: `${apiUrl}/api`,
      port: import.meta.env.PORT as string ?? defaultPort,
      vercelUrl: import.meta.env.VERCEL_URL as string ?? 'localhost'
    };
  };
  
  export const environment = getEnvironmentConfig();
  