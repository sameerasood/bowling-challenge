class Frame {
  constructor() {
    this.allFrames = [[]];
    this.singleFrame = 0;
    this.scoreCard = 0;
  }

  strike(pins1, pins2) {
    if (pins1 === 10) {
      this.scorecard += 10;
      firstRoll();
    } else if (pins2 === 10) {
      this.scoreCard += pins1 + pins2;
      secondRoll();
    }
  }

  spare(pins1, pins2) {
    if (pins1 + pins2 === 10) {
      this.scoreCard += pins1 + pins2;
      firstRoll();
    }
  }

  firstRoll(pins) {
    if (pins === 10) {
      this.singleFrame.push(10);
      this.singleFrame.push(0);
    } else this.singleFrame.push(pins);
    return pins;
  }

  secondRoll(pins) {
    this.singleFrame.push(pins);
    this.allFrames.push(this.singleFrame);
    return pins;
  }
}

module.exports = Frame;
