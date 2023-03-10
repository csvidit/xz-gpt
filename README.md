# Xzayvian GPT

Based on OpenAI's ChatGPT 3.5 Turbo LLM. Uses the latest version of the model through the official API. New users can sign up using their Google account, which will be then be used to create their profile on the project's Auth0 domain. (username-password signups are not available at the moment)

The user can send prompts and get a response to them. The search history of the user is connected to their user ID and stored in their dedicated Cloud Firestore document. They can see their history (and the response they had received) by going to the ```/history``` route. 

## Tech Stack

### Front-end

* Next.js
* TailwindCSS

### Database

* Cloud Firestore

### Authentication

* Auth0

### Backend

* Node.js

While aspects of this project may be replicated with or without attribution, the name **Xzayvian GPT** is hereby reserved for exclusive use by Vidit Khandelwal as his copyrighted intellectual property. Therefore, you may replicate this project (and copy various parts of the source code) but you must not call the derivative project "Xzayvian."
