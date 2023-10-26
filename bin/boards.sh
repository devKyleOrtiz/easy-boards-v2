#!/usr/bin/env bash

# Exit on error
set -o errexit

# FRONTEND BUILD

# Navigate to the client directory
cd client

# Install frontend dependencies
npm install

# Build frontend assets
npm run build

# Navigate back to the root directory
cd ..

# Delete the current public directory (make sure this is what you want!)
rm -rf public

# Copy built assets to the public directory
cp -a client/dist/. public/


# BACKEND BUILD

# Install Rails dependencies
bundle install

# Run database migrations
bundle exec rake db:migrate
