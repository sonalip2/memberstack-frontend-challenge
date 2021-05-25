# Memberstack Frontend Challenge

## Preface
Hello! 👋 We're excited to be sending you **Memberstack's Frontend Challenge.** Before we get into what you'll be building we want to set some expectations:

- We respect that this code is yours: it will be kept private and only ever used for evaluation purposes.
- Your time is valuable: we don't expect you to work on this for more than **2 hours**.
- We're here to help: if you're stuck or need clarification, please don't hesistate to reach out to us.

## What you'll be building
The challenge is divided into two parts:
1) A host page
2) An iFramed chat button

The client page has a `ColorPicker` and `ChatBotIFrame`. When a user selects a color, the chat button color should change in real-time (this is to say there should be no perceptible delay). When you start the application you will notice that the user can pick a color, but nothing happens.

Your challenge is as follows:
1) Create a way to update the chat button color when the user selects a color.
2) Persist the color such that color choice is maintained upon page refresh.

BONUS: The project styles are currently only using vanilla CSS. Implement your preferred tool for styling, and make one design improvement to the website.

Note: If you run out of time, that's okay! We have left a `NOTES.md` file for you to provide an explanation for your solution, as well as give you an opportunity to tell us about what else you would built if you had more time.

## Getting started
This project uses [Lerna monorepos](https://github.com/lerna/lerna) to manage two React applications. To start the application simply run:

```
yarn bootstrap
```

then

```
yarn start
```