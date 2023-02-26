class Frames {
  constructor() {
    this.scoreCard = 0;
    this.singleFrame = [];
    this.allFrames = [];
    this.bonusScore = 0;
    this.strike = false;
    this.spare = false;
  }
  roll(pins) {
    if (this.allFrames.length == 10) {
      if (this.strike == true) {
        this.scoreCard += pins + pins;
        this.allFrames[9].push(pins);
        this.strike = false;
      } else if (this.spare == true) {
        this.scoreCard += pins;
        this.allFrames[9].push(pins);
        this.spare = true;
      }
    } else if (this.singleFrame[0]) {
      this.singleFrame.push(pins);
      this.allFrames.push(this.singleFrame);
      this.scoreCard += this.singleFrame[1];
      if (this.strike == true) {
        this.scoreCard += this.singleFrame[1];
      }
      if (this.singleFrame[0] + pins == 10) {
        this.spare = true;
      }
      this.singleFrame = [];
      this.strike = false;
    } else {
      this.singleFrame.push(pins);
      this.scoreCard += this.singleFrame[0];
      if (this.strike == true || this.spare == true) {
        this.scoreCard += this.singleFrame[0];
      }
      this.spare = false;
      if (pins == 10) {
        this.strike = true;
        this.allFrames.push([10, 0]);
        this.singleFrame = [];
      }
    }
    console.log("Scorecard", this.scoreCard);
    console.log("Strike", this.strike);
    console.log("Spare", this.spare);
    console.log("singleFrame", this.singleFrame);
    console.log("allFrames", this.allFrames);
  }
}

module.exports = Frames;
