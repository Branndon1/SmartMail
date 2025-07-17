# SmartMail: AI-Powered Email Reply Generator


<img width="1421" height="760" alt="Screenshot 2025-07-16 123301" src="https://github.com/user-attachments/assets/3c57c14d-c649-4f32-a9be-bacbf2f08599" />


<img width="1519" height="507" alt="nowdone2" src="https://github.com/user-attachments/assets/16905855-6500-45bb-a7db-7dc73b89da12" />

<img width="1521" height="472" alt="nowgood" src="https://github.com/user-attachments/assets/17f5ec02-f375-4bf0-a174-d4e6db747923" />











SmartMail is an AI-powered application that generates professional, casual, or friendly replies to email content using Google's Gemini API. It features:

* Smart reply generation
* Optional tone customization
* Java Spring Boot backend
* Secure integration with Gemini API

---

## How It Works

1. Paste an email into the form.
2. Choose an optional tone (professional, casual, friendly).
3. Click Generate Reply.
4. SmartMail uses the Gemini API to create a suggested reply you can copy/paste.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Java 21+
* Maven
* Node.js + npm
* A [Google Gemini API key](https://aistudio.google.com/app/apikey)

---

## Backend (Spring Boot)

### 1. Clone the Repository

```bash
git clone https://github.com/Branndon1/SmartMail.git
cd smartmail
```

### 2. Configure Environment Variables

Create a `.env` file or set environment variables for:

```env
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
GEMINI_API_KEY=your_api_key_here
```

Make sure your `application.properties` reads these variables:

```properties
gemini.api.url=${GEMINI_API_URL}
gemini.api.key=${GEMINI_API_KEY}
```

### 3. Build and Run the Backend

```bash
./mvnw clean install
./mvnw spring-boot:run
```

The backend API will be available at `http://localhost:8080/api/email/generate`.

---

## Frontend (React)

### 1. Navigate to the frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the React App

```bash
npm start
```

This will open `http://localhost:5173` in your browser.

---

## Browser Extension (Optional)

If you have a browser extension to integrate SmartMail with Gmail or other email clients:

1. Clone or download the extension code.
2. Load the extension into your browser in developer mode.
3. Configure the extension to point to your backend API if necessary.

---

## Usage

* Paste email content into the app’s text area.
* Select the desired tone.
* Click Generate Reply
* Copy the AI-generated reply and paste it back into your email client.

---

## Troubleshooting

* Ensure your API key and URL are correctly set in environment variables.
* Verify backend is running before submitting requests from frontend.
* Check browser console and backend logs for errors.


