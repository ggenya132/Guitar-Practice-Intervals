const onSetTimeInverval = event => {
  timeVariable = parseInt(intervalInput.value);
};
const setPracticeInnerText = text => {
  practiceText.innerText = text;
};
const onStart = event => {
  setPracticeInnerText(getPracticeText());
  timeoutId = setInterval(() => {
    setPracticeInnerText(getPracticeText());
  }, timeVariable * 1000);
};
const onQuit = () => {
  clearInterval(timeoutId);
  setPracticeInnerText('');
};
const getPracticeText = () => {
  nextNote = notes[Math.floor(Math.random() * notes.length)];
  nexttypeModifier =
    typeModifiers[Math.floor(Math.random() * typeModifiers.length)];
  nextinversionModifier =
    inversionModifiers[Math.floor(Math.random() * inversionModifiers.length)];
  nextstringsetModifier =
    stringsetModifiers[Math.floor(Math.random() * stringsetModifiers.length)];

  const practiceText = `Next key: ${nextNote} ${nexttypeModifier} ${nextinversionModifier} ${nextstringsetModifier}`;
  return practiceText;
};
