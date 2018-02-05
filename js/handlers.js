function clickHandler(e) {
  var btn = e.target.id;
  switch (btn) {
    case 'hira-btn' :
      init(btn);
      break;
    case 'kata-btn' :
      init(btn);
      break;
    case 'reset-btn' :
      resetInputMessageAndButtons();
      stats.reset();
      break;
    case 'end-btn' :
      endGame();
  }
}

function keydownHandler(e) {
  if (e.keyCode === 13) {
    // set hasBeenDisplayed property for character
    kana[studyChoice].chars[kanaCurrentInfo.index].hasBeenDisplayed = true;
    
    // clear display message
    displayMessage('');
    var answer = answerInput.value.toLowerCase();
    if (answer === '') {
      displayMessage('You didn\'t enter anything. :(');
    } else {
      if (isAnswerCorrect(answer)) {
        kana[studyChoice].chars[kanaCurrentInfo.index].rightCount += 1;
        stats.streak++;
        // get new kana TODO: rename or break up into multiple functions
        storeKana();
        displayKana();
        displayMessage(`Streak: ${stats.streak}`);

      } else {
        kana[studyChoice].chars[kanaCurrentInfo.index].wrongCount += 1;
        stats.getLongestStreak();
        stats.streak = 0;
        displayMessage('Try Again');
      }
      clearInput();
    }
  }
}
