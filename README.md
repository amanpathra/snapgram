# Snapgram
Welcome to Snapgram, your go-to clean and serverless social media site built with React, TypeScript, Tailwind CSS, Vite, Appwrite, React-Query, and Shadcn/UI. This project offers a seamless experience with features like creating, updating, liking, commenting, saving, and searching posts. Snapgram is fully mobile responsive, ensuring you can enjoy it on the go.

## Pages
- **Home Page**: Your personalized feed, showcasing posts from people you follow.
- **Explore Page**: Discover hot and trending posts from the community.
- **Search Option**: Find users and posts with ease.
- **People's Page**: View profiles and posts from other users.
- **Saved Post Page**: Keep track of your saved posts for later.
- **Create/Update Post Page**: Share your moments with the world.

## Features
- **Create**: Share your moments by creating posts.
- **Update**: Keep your content fresh with easy post updates.
- **Like**: Show appreciation for posts by liking them.
- **Comment**: Engage with others through comments on posts.
- **Save**: Bookmark your favorite posts for later.
- **Search**: Find users and posts effortlessly.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript for enhanced development.
- **Tailwind CSS**: A utility-first CSS framework for efficient styling.
- **Vite**: A fast and modern frontend build tool.
- **Appwrite**: A serverless backend for managing user data and functions.
- **React-Query**: A library for fetching, caching, and updating data in React.
- **Shadcn/UI**: A UI components library for React.

## How to Use
1. Clone the repository to your local machine:
```
git clone https://github.com/amanpathra/snapgram.git
```
2. Navigate to the project directory:
```
cd snapgram
```
3. Install dependencies:
```
npm install
```
4. Configure Appwrite:
    1. Create an account on Appwrite.
    2. Set up a new App and note the API endpoint and project ID.
    3. Update the .env file with your Appwrite configuration:
    ```
    VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
    VITE_APPWRITE_PROJECT_ID=your-appwrite-project-id
    ```
5. Start the application:
```
npm run dev
```
6. Open your web browser and go to http://localhost:3000 to access Snapgram.

## Project Structure
- **src/**: Directory containing the React components, styles, and utility functions.
  - **components/**: React components for building Snapgram.
  - **hooks/**: Custom hooks for managing data with React-Query.

## Customization
Feel free to customize the React components, styles, and configuration files to match your preferences. Add your own features, update styling, and make it uniquely yours.

## Contributing
If you have any ideas for improvement or would like to contribute, feel free to submit issues or pull requests. Your feedback and contributions are highly appreciated!

## Acknowledgments
Thanks to the React community for providing a powerful framework.\
Special thanks to Appwrite for enabling serverless functions.\
Appreciation to the creators of React-Query and Shadcn/UI for enhancing the user experience.\
Gratitude to all contributors for their valuable contributions.