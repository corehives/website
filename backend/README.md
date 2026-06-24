# CoreHives Backend API

Node.js + Express + Prisma (MySQL) REST API powering the CoreHives site's
Testimonials, Blogs, and Jobs — plus the admin panel.

## Architecture

```
src/
├── config/db.js              # Prisma client singleton
├── modules/{testimonials,blogs,jobs}/
│   ├── *.routes.js           # Express router
│   ├── *.controller.js       # Calls service + apiResponse only
│   ├── *.service.js          # Only place that touches Prisma
│   └── *.validation.js       # Joi schemas (create + update)
├── middlewares/
│   ├── auth.middleware.js     # Bearer ADMIN_TOKEN on write routes
│   ├── error.middleware.js    # P2025→404, P2002→409, else 500
│   └── validate.middleware.js # Joi → 422 { errors:[{field,message}] }
├── utils/apiResponse.js      # success / paginated / error envelopes
├── app.js                    # Express setup, CORS, route registration
└── server.js                 # Entry point
prisma/
├── schema.prisma
└── seed.js                   # Seeds testimonials, blogs, jobs
```

**Rule:** controllers only call services; services are the only code that calls Prisma.

## Setup

```bash
cd backend
npm install
cp .env.example .env          # adjust DATABASE_URL / ADMIN_TOKEN as needed
npx prisma db push            # or: npm run db:migrate
npm run db:seed
npm run dev                   # http://localhost:5000
```

The default `.env` points at the local Laragon MySQL (`mysql://root@localhost:3306/corehives`).

## Scripts

| Script             | Purpose                          |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start with nodemon               |
| `npm start`        | Start (production)               |
| `npm run db:migrate` | `prisma migrate dev`           |
| `npm run db:seed`  | Seed all three tables            |
| `npm run db:studio`| Open Prisma Studio               |

## API

Base path: `/api/v1`. Write routes require `Authorization: Bearer <ADMIN_TOKEN>`.

| Method | Route                | Auth | Notes                                              |
| ------ | -------------------- | ---- | -------------------------------------------------- |
| GET    | /testimonials        | —    | Only `isActive:true`, ordered by `sortOrder`       |
| GET    | /testimonials/:id    | —    |                                                    |
| POST   | /testimonials        | ✅   |                                                    |
| PUT    | /testimonials/:id    | ✅   |                                                    |
| DELETE | /testimonials/:id    | ✅   | Soft delete (`isActive:false`)                     |
| GET    | /blogs               | —    | Published only; `?category=`, `?page=`, `?limit=`  |
| GET    | /blogs/:slug         | —    | By slug                                            |
| POST   | /blogs               | ✅   | Auto-sets `publishedAt` when published             |
| PUT    | /blogs/:id           | ✅   |                                                    |
| DELETE | /blogs/:id           | ✅   | Hard delete                                        |
| GET    | /jobs                | —    | Active + (`expiresAt` null or future)              |
| GET    | /jobs/:id            | —    |                                                    |
| POST   | /jobs                | ✅   |                                                    |
| PUT    | /jobs/:id            | ✅   |                                                    |
| DELETE | /jobs/:id            | ✅   | Soft delete (`isActive:false`)                     |

Response envelope: `{ success, data, message }` or, for blog lists,
`{ success, data, pagination:{ total, page, limit, totalPages } }`.

## Frontend wiring

The Vite dev server proxies `/api` → `http://localhost:5000` (see `vite.config.js`),
so the React app calls the API with relative URLs in dev. For production, set
`VITE_API_URL` in the frontend `.env` to the deployed API origin.
