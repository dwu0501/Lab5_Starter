# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

### Members
- Daniel Wu

## Links to expose.html and explore.html
[expose.html](https://dwu0501.github.io/Lab5_Starter/expose.html) <br>
[explore.html](https://dwu0501.github.io/Lab5_Starter/explore.html)

## Explore - pt.2
1) I wouldn't use a unit test to test the "message" feature since we cannot check for the interactions that encompass this feature, like API calls, frontend and backend communication, and user feedback. A unit test cannot account for all of these things at the same time.

2) I would use a unit test to test the "max message length" feature since it is an easy assertion to make on a message component. This can be done as simply as: `expect(message.length).toBeLessThanOrEqual(80)`.
