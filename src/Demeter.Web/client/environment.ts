// environment.ts

interface EnvironmentConfig {
    apiUrl: string;
    port: string;
    DemeterUrl: string;
  }
  
  const getEnvironmentConfig = (): EnvironmentConfig => {
    // Environment-specific logic
    const defaultPort = '5029'; // Default port if not specified
    const apiUrl = import.meta.env.VITE_DEMETER_URL ? `https://${import.meta.env.VITE_DEMETER_URL}` : `http://localhost:${defaultPort}`;

    console.log(import.meta.env.VITE_DEMETER_URL)
  
    return {
      apiUrl: `${apiUrl}/api`,
      port: import.meta.env.PORT as string ?? defaultPort,
      DemeterUrl: import.meta.env.VITE_DEMETER_URL as string ?? 'localhost'
    };
  };
  
  export const environment = getEnvironmentConfig();
  