# Zcrum - Project Management Application

A modern, full-stack project management application inspired by Jira, built with Next.js, featuring Kanban boards, sprint management, and team collaboration tools.

![Zcrum Logo](/logo2.png)

## 🚀 Features

- **Authentication & Authorization**
  - Secure user authentication with Clerk
  - Organization-based access control
  - Role-based permissions (Admin/Member)

- **Project Management**
  - Create and manage multiple projects
  - Unique project keys for identification
  - Project descriptions and metadata

- **Sprint Management**
  - Create and manage sprints with date ranges
  - Sprint status tracking (PLANNED, ACTIVE, COMPLETED)
  - Admin-controlled sprint activation and completion

- **Issue Tracking**
  - Kanban board with drag-and-drop functionality
  - Issue statuses: TODO, IN_PROGRESS, IN_REVIEW, DONE
  - Priority levels: LOW, MEDIUM, HIGH, URGENT
  - Issue assignment to team members
  - Rich issue descriptions with markdown support
  - Issue filtering and search

- **User Management**
  - User profiles with avatars
  - Issue assignment and reporting
  - Organization member management

- **UI/UX**
  - Dark mode support
  - Responsive design
  - Modern, clean interface using shadcn/ui
  - Real-time updates with optimistic UI

## 🛠️ Tech Stack

### Frontend
- **Next.js 14.2.16** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components built on Radix UI
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **@hello-pangea/dnd** - Drag and drop functionality
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **date-fns** - Date manipulation
- **Sonner** - Toast notifications
- **next-themes** - Theme management

### Backend
- **Prisma** - ORM for database operations
- **PostgreSQL** - Database (Neon.tech)
- **Server Actions** - Next.js server-side mutations
- **Clerk** - Authentication and organization management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
jira/
├── app/
│   ├── (auth)/              # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/              # Main application routes
│   │   ├── onboarding/      # Organization onboarding
│   │   ├── organization/    # Organization dashboard
│   │   └── projects/        # Project management
│   │       ├── create/      # Create new project
│   │       └── [projectId]/ # Project details & sprints
│   ├── fonts/               # Custom fonts
│   ├── lib/                 # App utilities
│   ├── layout.js            # Root layout
│   ├── page.js              # Landing page
│   └── globals.css          # Global styles
├── actions/                 # Server actions
│   ├── issues.js           # Issue CRUD operations
│   ├── organization.js     # Organization operations
│   ├── projects.js         # Project CRUD operations
│   └── sprints.js          # Sprint operations
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── issue-card.jsx      # Issue display component
│   ├── issue-details-dialog.jsx  # Issue details modal
│   ├── Header.jsx          # Application header
│   └── ...                 # Other components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
│   ├── prisma.js          # Prisma client
│   ├── utils.js           # Helper functions
│   └── checkUser.js       # User validation
├── prisma/                 # Database schema
│   └── schema.prisma      # Prisma schema
├── public/                 # Static assets
└── data/                   # Static data
    ├── status.js          # Issue status definitions
    └── faqs.js            # FAQ data
```

## 🗄️ Database Schema

### Models

**User**
- `id` - Unique identifier
- `clerkUserId` - Clerk user ID
- `email` - User email
- `name` - User name
- `imageUrl` - Profile picture
- Relations: createdIssues, assignedIssues

**Project**
- `id` - Unique identifier
- `name` - Project name
- `key` - Project key (e.g., "PROJ")
- `description` - Project description
- `organizationId` - Clerk organization ID
- Relations: sprints, issues

**Sprint**
- `id` - Unique identifier
- `name` - Sprint name
- `startDate` - Sprint start date
- `endDate` - Sprint end date
- `status` - PLANNED | ACTIVE | COMPLETED
- Relations: project, issues

**Issue**
- `id` - Unique identifier
- `title` - Issue title
- `description` - Issue description
- `status` - TODO | IN_PROGRESS | IN_REVIEW | DONE
- `priority` - LOW | MEDIUM | HIGH | URGENT
- `order` - Order within status column
- Relations: project, sprint, assignee, reporter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Neon.tech account)
- Clerk account for authentication

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yashdhawane/zcrum-jira.git
cd jira
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
```

4. **Set up the database**

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma studio` - Open Prisma Studio for database management

## 🔐 Authentication Flow

1. User signs up/signs in via Clerk
2. User is redirected to onboarding if not part of an organization
3. User creates or joins an organization
4. Admin users can create projects
5. Team members can view and interact with projects

## 👥 User Roles

### Admin
- Create and delete projects
- Create and manage sprints
- Activate and complete sprints
- Full access to all project features

### Member
- View projects and sprints
- Create and edit issues
- Update issue status (during active sprints)
- View assigned issues

## 🎨 Key Components

### Sprint Board
- Drag-and-drop Kanban interface
- Real-time issue status updates
- Sprint-specific issue filtering
- Issue creation and management

### Issue Management
- Create issues with title, description, priority
- Assign issues to team members
- Track issue status and priority
- View issue history and details

### Project Dashboard
- Project overview and statistics
- Sprint management interface
- Team member access control

## 🧪 Testing

Currently, the project does not include automated tests. Manual testing is performed through the development server.

## 🚢 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Ensure all environment variables from `.env.local` are configured in your production environment.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built by [Yash](https://github.com/yashdhawane)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Clerk](https://clerk.com/) - Authentication solution
- [Prisma](https://www.prisma.io/) - Database toolkit
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
