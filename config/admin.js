module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6414c1bdb05e4439fece0ef50f87cd50'),
  },
});
