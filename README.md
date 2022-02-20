# Trackio

Budgeting and tracking personal finances are extremely important for everyone, but we found there weren’t too many apps that catered to the disabled and elderly population. Trackio aims to make personal finance and budgeting accessible to all, using Speech APIs to allow only verbal interaction between the app and the user.

## What it does

Trackio takes the user’s weekly income and divides it into six categories based off of the 6-jar financial budgeting concept. These categories include Necessity, Financial Freedom, Play, Give, Long-Term Savings, and Education. The amounts in each are a certain percentage of the user’s income. The application asks the user for their weekly income, and then distributes this amount into the 6 jars. When the user asks for the amount of money left in a specific category, the app responds verbally with the amount of money left. When asked for weekly income, the user should respond with "My weekly income is ___ ." When asking for the amount left in a specific jar, the user should ask "How much do I have left in ___ ?"

## How we built it
We used React JS and VS Code to create the web application. We used the react-speech-recognition package as a Speech recognition API, that has text-to-speech and voice recognition. The API was used to have the computer understand the category that the user was asking for, and respond verbally with the amount in that category.

## Challenges we ran into
This was our first time using React and Speech APIs, and we ran into many challenges with the implementation of these softwares. Most of our challenges involved learning new concepts related to how to use the APIs or how to use React. However, we were able to follow many tutorials and eventually figure out how to get the web app to function properly.

## Accomplishments that we're proud of
We are very proud of the fact that we got the Speech APIs to work, and that the app works mostly without the use of buttons.

## What we learned
We learned a lot about using Speech APIs, especially in relation to web app development. We also gained experience in using React, CSS, and JavaScript.

## What's next for Trackio
There is a lot in store for Trackio! We want to add more features with customizing the jars’ categories, and letting the user input the percentage of income they preferred to allot for each category. We also plan to remove the microphone control buttons to make the application rely solely on verbal interaction. We hope to extend this concept of a fully verbal application to other apps.


<img width="506" alt="TrackioLogo" src="https://user-images.githubusercontent.com/60861845/154836622-a293b032-352f-4da6-8007-b72e78367773.png">

Link to web application: https://trackio-tech.netlify.app/
