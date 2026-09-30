export default class Story {
  storyTitle: string;
  choice1: string;
  choice2: string;

  constructor(storyTitle: string, choice1: string, choice2: string) {
    this.storyTitle = storyTitle;
    this.choice1 = choice1;
    this.choice2 = choice2;
  }
}