# 🛒 E-Commerce Backend (with Admin Dashboard)

This is the backend of a full-stack e-commerce application built using **Express.js**, **TypeScript**, **PostgreSQL**, and **Prisma**. It includes full functionality for customers and an admin dashboard to manage products, users, orders, and payments.

---

## 🚀 Features

- 🧑‍💻 **Admin Dashboard**

  - Manage users, products, orders, payments
  - Role-based access (admin/customer)

- 👥 **User Module**

  - Registration & login with JWT
  - Profile management
  - Address book (shipping/billing)

- 🛍 **Product Catalog**

  - Category-based browsing
  - Stock tracking

- 🧾 **Order System**

  - Multi-item orders
  - Order history

- 💳 **Stripe Payments**

  - Secure checkout
  - Payment intent creation

- ✅ Zod-based validation
- 🔐 Secured with Helmet, CORS, JWT cookies

---

## 🔑 Admin Dashboard Notes

- ✅ View and manage all users
- 🛒 Create, edit, and delete products and categories
- 📦 View and update order statuses
- 💳 Access Stripe payment history

All admin dashboard routes are **protected by middleware**, ensuring that only users with administrative privileges can access them.

---

## 📌 TODO

- 📘 Integrate Swagger API Documentation
- 🛒 Implement cart functionality
- 🎟️ Add support for discount/coupon codes
- 📧 Enable order tracking with email notifications

---

## 🧰 Tech Stack

- **Backend**: Express, TypeScript
- **Database**: PostgreSQL + Prisma
- **Validation**: Zod
- **Auth**: bcrypt + JWT (HTTP-only cookies)
- **Payment**: Stripe
- **File Uploads**: Multer
- **Security**: Helmet, CORS, cookie-parser

---

## 👤 Author

**Mihad Khadem**  
🔗 [GitHub](https://github.com/mihad-khadem)  
📧 mihadkhadem@gmail.com
