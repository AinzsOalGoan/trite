**Trite - Video Commerce Platform**

Trite is a modern, full-featured Next.js application designed for managing and monetizing video content. It seamlessly integrates with ImageKit for media handling and Razorpay for secure payments, offering a streamlined experience for creators and consumers alike.

🚀 **Features**

+ 🔐 User Authentication with NextAuth.js and JWT

+ 📹 Video Upload & Management via ImageKit

+ 💳 Payment Integration using Razorpay

+ 🎨 Modern UI built with Tailwind CSS & DaisyUI

+ 📱 Fully Responsive Design for all devices

+ 🔒 Secure API Routes using Next.js server components

+ 📧 Email Notifications powered by Nodemailer

+ 🗄️ MongoDB with Mongoose for robust data handling

#

🧱 **Tech Stack**

+ Frontend: Next.js 15, React 19, TypeScript

+ Styling: Tailwind CSS, DaisyUI

+ Authentication: NextAuth.js, JWT

+ Database: MongoDB + Mongoose

+ File Storage: ImageKit

+ Payments: Razorpay

+ Email Service: Nodemailer

+ Form Handling: React Hook Form

#

✅ **Prerequisites**

Make sure you have:

+ Latest LTS version of Node.js

+ A MongoDB database connection

+ ImageKit account

+ Razorpay account

+ SMTP credentials (Mailtrap, Gmail, etc.)

#

⚙️ **Getting Started**

1. Clone the Repository

```
git clone <repository-url>

cd trite
```

2. Install Dependencies

`npm install`

3. Configure Environment Variables

+ Copy `.env`

+ Fill in your configuration:

*.env*
```
# MongoDB
MONGODB_URI=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# ImageKit
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# SMTP (Email)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```
4. Start the Development Server

    `npm run dev`

Open http://localhost:3000 in your browser.

#

📂 **Project Structure**
```
├── app/                  # Next.js app directory
│   ├── api/              # API routes (auth, payment, upload, etc.)
│   ├── components/       # Reusable UI components
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   └── upload/           # Video upload page
├── lib/                  # Utility & helper functions
├── models/               # MongoDB schema models
├── public/               # Static assets
└── types.d.ts            # Global TypeScript types
```
#

🛠 **Available Scripts**

+ `npm run dev` – Start the development server

+ `npm run build` – Build the application for production

+ `npm run start` – Start the production server

+ `npm run lint` – Run ESLint to catch issues

+ `npm run seed` – Seed the MongoDB database

+ `npm run mailtrap` – Test email configuration

#

▲ **Vercel Deployment**

comming soon
