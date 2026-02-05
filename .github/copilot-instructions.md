# Myntra E-Commerce Codebase Guide

## Architecture Overview

This is a React + Vite e-commerce application mirroring Myntra's structure. Key patterns:

### Core Stack
- **Frontend**: React 19 with Vite for fast builds
- **State Management**: Redux Toolkit with RTK Query for API caching
- **Styling**: SCSS modules + Emotion theming + MUI components
- **Form Validation**: React Hook Form + Yup schema validation
- **Routing**: React Router v6 with nested layouts

### Data Flow Architecture
```
Pages (ProductListingPage, ProductInfo) 
  ↓ (useParams)
RTK Query Endpoints (categoryApi, subCategoryApi, products)
  ↓ (HTTP requests to localhost:8080)
Backend API
Redux Store maintains wishlist state
BreadcrumbContext provides navigation state
```

**Critical Pattern**: Pages fetch category/product data via RTK Query hooks (`useGetCategoryBySlugQuery`, `useGetProductsBySubCategorySlugQuery`), then update BreadcrumbContext with navigation data.

## API Integration Points

All backends proxied through Vite proxy configuration (`vite.config.js`):
- **Category Service**: `GET /categories/department/{id}/with-subcategories`, `GET /categories/slug/{slug}`
- **SubCategory Service**: `GET /subcategories/slug/{slug}`
- **Product Service**: `GET /product/{id}`, `GET /product/categories/{slug}/products`
- **User Service**: `GET /user/profile/{id}` (via axios in `Service/UserService.js`)

## Component Structure

### Layout Pattern
[MainLayout.jsx](src/Pages/MainLayout.jsx) wraps all routes and provides consistent header/breadcrumb:
```jsx
<MainLayout>
  <Navbar />
  <BreadCrumb items={breadcrumbItems} />
  <Outlet /> {/* Page content */}
</MainLayout>
```

### Shared Patterns
1. **RTK Query Hooks**: Use `skip: !dependency` to conditionally fetch (see [Navbar.jsx](src/Components/Navbar.jsx) line 18-22)
2. **URL Structure**: Categories/products use slug-based routing - `/{categorySlug}/{subCategorySlug}` and `/product/{productSlug}/{productId}`
3. **State Synchronization**: BreadcrumbContext syncs route params with breadcrumb display (see [ProductListingPage.jsx](src/Pages/ProductListingPage.jsx) lines 18-30)

## Key Conventions

### Naming & Organization
- **RTK Query APIs**: Defined in `Store/` with export pattern `export const { useQuery1, useQuery2 } = apiSlice`
- **Context Hooks**: Always provide both Provider and hook export (see [BreadcrumbContext.jsx](src/context/BreadcrumbContext.jsx))
- **Static Data**: Categories/departments in `data/` folder, imported directly
- **Reducers**: Redux slices use simple action naming (`addToWishlist`, `removeFromWishlist`)

### Theming & Styling
- **MUI Theme**: Defined once in [src/styles/theme.js](src/styles/theme.js) with Myntra pink (`#ff3f6c`), injected via `<ThemeProvider>`
- **SCSS Architecture**: Modular per component in `styles/components/`, base styles in `styles/base/`
- **Emotion Integration**: Provides CSS-in-JS support for MUI alongside SCSS

### Important Quirks
- **Departments data**: Has slug inconsistencies (all map to "women") - needs backend alignment
- **ProductCard**: Opens new window on click (`window.open`), not standard navigation
- **Form Patterns**: Uses Yup for schema validation with `yupResolver` from react-hook-form

## Development Workflow

### Commands
```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to dist/
npm run lint      # ESLint check (partially disabled, see config)
npm run preview   # Preview production build
```

### Backend Requirement
Backend API must run on `http://localhost:8080` - all RTK Query baseURLs target this. Vite proxy in dev redirects `/user` to backend.

### Common Tasks
- **Adding new pages**: Create in `Pages/`, export in [routes.jsx](src/routes.jsx), define route with params
- **Adding API endpoints**: Extend RTK Query slices in `Store/`, use naming convention `getXByY` for queries
- **Updating breadcrumbs**: Modify query in page component, call `setItems()` in useEffect when data loads
- **Adding wishlist items**: Dispatch `addToWishlist(product)` action from Redux

## Build & Deployment

- **Dev**: Vite HMR enabled, no TypeScript checking (ESLint partially disabled)
- **Prod**: Single bundle, SCSS compiled, dependencies tree-shook
- **No tests configured**: Manual testing required

## Known Issues

- Wishlist state not persisted to localStorage
- Filter sidebar/form components may be incomplete
- User authentication routes (Login, Registration, Profile) not integrated with API
- Department slugs inconsistent in data layer
