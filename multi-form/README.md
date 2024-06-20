
# Multi-Step Form with React

This project is a responsive multi-step form built with React.js. It features data validation, error handling, and navigation controls, with data persistence using local storage. The form includes three steps: Personal Information, Address Information, and Confirmation.

Table of Contents
Features
Installation
Usage
Components
State Management
Validation
Local Storage
Responsive Design
Optional Enhancements
Assumptions and Decisions
Setup Instructions
Features
Multi-step form with three steps:
Step 1: Personal Information (Name, Email, Phone)
Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
Step 3: Confirmation (Review all entered data)
Tabbed navigation with step controls
Data validation and error handling
State management with React hooks
Data persistence with local storage
Responsive design
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
Install the dependencies:

bash
Copy code
npm install
Usage
To start the development server, run:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Components
PersonalForm.js: Handles the personal information step.
AddressForm.js: Handles the address information step.
Confirmation.js: Handles the confirmation step.
StepNavigator.js: Provides navigation controls between steps.
FormContainer.js: Manages the form state, validation, and rendering of steps.
ValidationSchema.js: Contains validation functions for the form fields.
State Management
State is managed using React's useState and useEffect hooks. The form data is stored in a state object, and each step's data is updated as the user progresses through the form.

Validation
Client-side validation is implemented to ensure all required fields are filled before allowing navigation to the next step. Error messages are displayed for invalid or empty fields, and fields with errors are highlighted.

Local Storage
Form data is persisted to local storage when the user navigates between steps. If the user revisits the form, the fields are pre-filled with the stored data.

Responsive Design
The form is designed to be responsive and works well on desktop, tablet, and mobile screens. Material UI is used for layout and styling.

Optional Enhancements
Simulated API calls with setTimeout for error handling
Animations or transitions between steps
Unit tests for critical components or validation functions
Assumptions and Decisions
The form assumes a simple linear progression between steps.
Local storage is used to persist data to provide a seamless user experience.
Material UI is chosen for its ease of use and responsive capabilities.
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.

License
This project is licensed under the MIT License. See the LICENSE file for details.

