module.exports = {
  apps: [
    {
      name: 'play14-community',
      cwd: '/srv/strapi/',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DB_HOST: process.env.DATABASE_HOST,
        DB_PORT: 27017,
        DB_NAME: process.env.DATABASE_NAME,
        DB_USER: process.env.DATABASE_USERNAME,
        DB_PASS: process.env.DATABASE_PASSWORD,
        JWT_SECRET: process.env.JWT_SECRET,
      },
    },
  ],
};
