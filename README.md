# Go Business - Referral Dashboard

A clean React dashboard to track referrals, earnings, and partner details.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Authentication**: Simple login screen with cookies-based sessions.
- **Metrics Overview**: Key performance indicators with clean icons.
- **Service Summary**: Visual cards for active referrals and total earnings.
- **One-click Copy**: Easily share referral links and codes.
- **Interactive Referrals Table**: Filter by search query, sort by date, and click rows to open detailed pages.
- **Detail View**: Full information about individual referral partners at `/referral/:id`.

## Test Credentials

- **Email**: `admin@example.com`
- **Password**: `admin123`

## Project Structure

```text
src/
├── components/
│   ├── AllReferrals.jsx      # Referral section layout
│   ├── Footer.jsx            # Branding and footer navigation
│   ├── Navbar.jsx            # Home links and logout controls
│   ├── Overview.jsx          # Metric cards overview
│   ├── Pagination.jsx        # Client-side table paging
│   ├── ProtectedRoute.jsx    # Private route guard
│   ├── PublicRoute.jsx       # Public route block
│   ├── ReferralsTable.jsx    # Table displaying row entries
│   ├── ShareReferral.jsx     # Read-only referral link inputs
│   └── Summary.jsx           # Service breakdown summary
├── pages/
│   ├── Dashboard/            # Main metrics and summary portal
│   ├── Login/                # User login screen
│   ├── NotFound/             # 404 page
│   └── ReferralDetails/      # Detail list of individual referrals
├── services/
│   ├── authApi.js            # Post call to login endpoint
│   ├── referralsApi.js       # Get call for main listings & details
│   └── searchFilterApi.js    # Get call for search & sort
└── utils/
    ├── formatCurrency.js     # Profit value en-US USD format
    └── formatDate.js         # YYYY/MM/DD slash date format
```

