/* eslint-disable @typescript-eslint/naming-convention */

declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_USERNAME: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DATABASE: string;
    POSTGRES_PORT: string;
    POSTGRES_HOST: string;

    NODE_ENV: string;
  }
}
