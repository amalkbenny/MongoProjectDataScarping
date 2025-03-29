# NestJS MongoDB Project

This project is a NestJS application with MongoDB integration, featuring two main modules:
- Logs Module: For managing application logs
- Scraped Data Module: For managing scraped web content

## Prerequisites

- Node.js (v14 or later)
- MongoDB (running locally or accessible via connection string)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Configuration

The application connects to MongoDB using the following default connection string:
```
mongodb://localhost:27017/nestjs-demo
```

You can modify this in `src/app.module.ts` if you need to connect to a different MongoDB instance.

## Running the Application

1. Start the development server:
```bash
npm run start:dev
```

2. The application will be available at `http://localhost:3000`
3. Swagger documentation will be available at `http://localhost:3000/api`

## API Endpoints

### Logs Module
- POST `/logs` - Create a new log
- GET `/logs` - Get all logs
- GET `/logs/:id` - Get a specific log
- PATCH `/logs/:id` - Update a log
- DELETE `/logs/:id` - Delete a log

### Scraped Data Module
- POST `/scraped-data` - Create new scraped data
- GET `/scraped-data` - Get all scraped data
- GET `/scraped-data/search?tags=tag1,tag2` - Search scraped data by tags
- GET `/scraped-data/:id` - Get specific scraped data
- PATCH `/scraped-data/:id` - Update scraped data
- DELETE `/scraped-data/:id` - Delete scraped data

## Swagger Documentation

The API documentation is available through Swagger UI at `http://localhost:3000/api`. This provides an interactive interface to explore and test all available endpoints.

## Data Models

### Log
- message: string (required)
- level: string (required)
- timestamp: Date (auto-generated)
- metadata: Object (optional)

### Scraped Data
- title: string (required)
- url: string (required)
- content: string (optional)
- tags: string[] (optional)
- scrapedAt: Date (auto-generated)
- metadata: Object (optional)
