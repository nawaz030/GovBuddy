GovBuddy: Your Personal Government Scheme Finder

Use Case:
Helping Indian citizens discover government schemes they are eligible for, in a simple, personalized, and accessible way.

Concept of the Application

What is GovBuddy? : 
A web/mobile app that helps users discover which government schemes they are eligible for based on simple inputs like:
Age
Income level
Occupation (e.g., farmer, student, woman entrepreneur)
Education status
Region/state
Inspiration:
Think of it like: “Which Sarkari Yojana is for me?” — simplified and accessible.

Key Technologies Used :

Languages: TypeScript, SQL, HTML, CSS
Frontend:
React (component-based UI)
Tailwind CSS (modern styling)
Vite (fast development + build tool)
Backend:
Node.js + Express.js
TSX + Cross-env for smooth builds
Database: SQLite (local) with Drizzle ORM
APIs: RESTful API endpoints to fetch and filter schemes 

How It Works :

User opens the app and fills out the form (name, age, income, etc.)
Frontend sends the form data to the backend via API (/api/match)
Backend processes data and queries the database for matching schemes
Matching schemes are sent back as a response
Frontend displays the results in a clean, user-friendly layout 

Needs or Problems It Solves :

Most citizens don’t know what government schemes exist.
Schemes are hard to search or understand — they're often buried in PDFs and outdated portals.
Even educated users struggle to check eligibility or apply.
There's no central, user-friendly platform for discovering schemes.

Challenges Faced During Development : 

Complex government scheme data structures
Matching logic: handling eligibility rules across many schemes
Integrating frontend and backend with clean API flow
Hosting and bundling the app for production on Windows
Ensuring SQLite compatibility with deployment tools

Future Plans and Enhancements : 

Add multilingual support (Hindi, Telugu, etc.)
Integrate with official government APIs for real-time scheme updates
Allow login to save user profiles and track applications
Add chatbot or voice assistant to guide low-literate users
Launch Android/iOS version using React Native
Partner with NGOs and local governments for outreach
