

const ReadTime = ({minutes}) => {
    let emoji = '';
    if (minutes < 30){
        const coffeecups = Math.ceil(minutes/5);
        emoji = '☕️ '.repeat(coffeecups);
    } else {
        const bentoBoxes =Math.ceil(minutes/10);
        emoji = '🍱'.repeat(bentoBoxes);
    }
  return `${emoji} ${minutes} min read`;
}

export default ReadTime
