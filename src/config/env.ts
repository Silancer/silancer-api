function required(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env = {
  APP_NAME: required("APP_NAME"),

  DATABASE_URL: required("DATABASE_URL"),

  SUPABASE_URL: required("SUPABASE_URL"),
  SUPABASE_ANON_KEY: required("SUPABASE_ANON_KEY"),
  SUPABASE_SERVICE_ROLE_KEY: required("SUPABASE_SERVICE_ROLE_KEY"),

  JWT_SECRET: required("JWT_SECRET"),
  JWT_REFRESH_SECRET: required("JWT_REFRESH_SECRET"),
  JWT_ACCESS_EXPIRE: required("JWT_ACCESS_EXPIRE"),
  JWT_REFRESH_EXPIRE: required("JWT_REFRESH_EXPIRE"),

  REDIS_URL: required("REDIS_URL"),

  GOOGLE_CLIENT_ID: required("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: required("GOOGLE_CLIENT_SECRET"),
};
