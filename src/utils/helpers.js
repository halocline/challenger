export const logEvent = event => {
  console.log(
    'Event:',
    event.type,
    'target.innerHTML:',
    event.target.innerHTML
  );
};
