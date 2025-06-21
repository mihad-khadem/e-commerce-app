# E-Commerce Platform

A full-stack e-commerce application for managing users, products, orders, and payments. Built with a monolithic architecture, it features user authentication, product catalog, order processing, and Stripe payment integration.

## [Entity-Relationship Diagram (ERD)] (https://app.eraser.io/workspace/cU3kEOD1xZslxF0JfYB6?origin=share)

## Features
- User registration/login with customer/admin roles
- Manage multiple shipping/billing addresses
- Product catalog with categories and stock tracking
- Order creation with multiple items
- Secure payments via Stripe
- RESTful API for CRUD operations

## Tech Stack

### Frontend
- **Next.js**, **React**, **react-dom**: UI framework
- **axios**: API calls
- **zustand**: State management
- **tailwindcss**: Utility-first styling
- **@headlessui/react**, **shadcn/ui**: UI components
- **react-stripe-js**: Stripe integration
- **react-hook-form**, **@hookform/resolvers**: Form management with Zod

### Backend
- **Express**, **TypeScript**: Web framework
- **dotenv**: Environment variables
- **cors**, **helmet**: Security
- **express-async-handler**: Async error handling
- **bcrypt**, **jsonwebtoken**: Authentication
- **cookie-parser**: HTTP-only cookies
- **multer**: File uploads
- **zod**: Schema validation
- **uuid**: Unique IDs

### Database
- **PostgreSQL**: Relational database
- **Prisma**: ORM with TypeScript support

### Payment
- **stripe**, **@stripe/stripe-js**: Payment processing

## File Structure

- **backend**: Express.js backend with TypeScript
  - **src**: Source code
    - `controllers`: API logic and request handlers
    - `routes`: API route definitions
    - `services`: Business logic and external integrations
    - `models`: Prisma schema for database models
    - `utils`: Helper functions and utilities
    - `app.ts`: Main application entry point
- **frontend**: Next.js frontend
  - `app`: Next.js app directory for routing
  - `components`: Reusable React components
  - `lib`: API clients and utility libraries
  - `hooks`: Custom React hooks
  - `store`: Zustand state management
  - `styles`: Tailwind CSS and global styles
  - `utils`: Frontend helper functions

### Description
- **backend/src**: Contains backend logic, with controllers for APIs, services for business logic, and Prisma models for database.
- **frontend/app**: Handles Next.js routing and page rendering.
- **frontend/components**: UI components styled with Tailwind CSS.


## Database Schema

### Entities
1. **User**
   - `id`: UUID (PK)
   - `name`, `email`, `password`: String
   - `role`: Enum (customer, admin)
   - `created_at`, `updated_at`: Timestamp
   - `isDeleted`: Boolean
2. **Address**
   - `id`: UUID (PK)
   - `user_id`: UUID (FK → User.id)
   - `type`: Enum (shipping, billing)
   - `street`, `city`, `postal_code`, `country`: String
3. **Product**
   - `id`: UUID (PK)
   - `title`, `description`, `image_url`: String
   - `price`: Decimal
   - `stock`: Integer
   - `category_id`: UUID (FK → Category.id)
4. **Category**
   - `id`: UUID (PK)
   - `name`: String
5. **Order**
   - `id`: UUID (PK)
   - `user_id`: UUID (FK → User.id)
   - `status`: Enum (pending, paid, shipped)
   - `total_amount`: Decimal
   - `created_at`: Timestamp
6. **OrderItems**
   - `id`: UUID (PK)
   - `order_id`: UUID (FK → Order.id)
   - `product_id`: UUID (FK → Product.id)
   - `quantity`: Integer
   - `price`: Decimal
7. **Payment**
   - `id`: UUID (PK)
   - `order_id`: UUID (FK → Order.id, 1:1)
   - `stripe_payment_id`: String
   - `amount`: Decimal
   - `status`: Enum (succeeded, failed)
   - `created_at`: Timestamp

### Relationships
- **User ↔ Address**: 1:N (`user_id`)
- **User ↔ Order**: 1:N (`user_id`)
- **Category ↔ Product**: 1:N (`category_id`)
- **Order ↔ OrderItems**: 1:N (`order_id`)
- **Product ↔ OrderItems**: 1:N (`product_id`)
- **Order ↔ Payment**: 1:1 (`order_id`)

