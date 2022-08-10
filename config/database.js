module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'shopify_shopify-sync-database'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'shopify'),
      user: env('DATABASE_USERNAME', 'mysql'),
      password: env('DATABASE_PASSWORD', '2c164ea7c3f336838b38'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
