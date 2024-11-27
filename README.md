# Password Generator 🔒

A simple and customizable **Password Generator** built using **React**. This app allows users to generate secure passwords based on their preferences and copy them to the clipboard with ease.

## Features ✨
- **Customizable Password Length**: Choose password length between 6 and 20 characters.
- **Toggle Options**: Enable or disable the inclusion of numbers and special characters.
- **Clipboard Copy**: Copy the generated password with a single click.

---

## Demo 🖥️
![Password Generator Screenshot](./images/pg-two.png)  
*Screenshot of the Password Generator UI*  

---

## How It Works ⚙️
1. Adjust the **password length** using the slider.
2. Toggle options to include **numbers** and/or **special characters**.
3. Copy the generated password by clicking the **"Copy" button**.  

---

## Technologies Used 🛠️
- **React**: For building the user interface.
- **TailwindCSS**: For styling the app.
- **React Hooks**:  
  - `useState` for managing app state (length, options, password).  
  - `useRef` for DOM manipulation (clipboard copy).  
  - `useCallback` for optimizing functions.  

---

## Installation & Setup 🚀
1. Clone the repository:  
   ```bash
   git clone https://github.com/bhaveshjain2603/password-generator.git

2. Run the Development Server:  
   ```bash
   npm run dev
