
let count = 0;
let hint;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  }
  if (count > 0) {
    hint = 'Bet';
  } else {
    hint = 'Hold'
  }
  return count + ' ' + hint;
}

cc(2); cc(3); cc(4); cc('A'); cc('K');