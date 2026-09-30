import Story from '../models/Story';

export default class StoryBrain {
  private _storyNumber: number = 0;

  private _storyData: Story[] = [
    new Story(
      'Xe của bạn bị nổ lốp ở một con đường vắng vẻ hẻo lánh. Không có sóng điện thoại. Bạn quyết định vẫy xe đi nhờ. Một chiếc xe bán tải rỉ sét dừng lại. Một người đàn ông với đôi mắt vô hồn mở cửa xe và hỏi: "Cần đi nhờ không?"',
      'Tôi sẽ lên xe. Cảm ơn ông rất nhiều!',
      'Tốt hơn hết tôi nên hỏi xem ông ta có phải kẻ giết người không.'
    ),
    new Story(
      'Ông ta gật đầu chậm rãi, không hề tỏ ra bất ngờ. "Được thôi, nhưng hãy cẩn thận với cái hộp ở ghế sau."',
      'Ít nhất ông ta cũng thành thật. Tôi sẽ leo lên xe.',
      'Khoan đã, tôi chợt nhớ ra là mình biết tự thay lốp xe!'
    ),
    new Story(
      'Trên đường đi, người đàn ông bắt đầu giận dữ nói về gia đình mình. Ông ta yêu cầu bạn mở hộp găng tay. Bên trong có một con dao dính máu và một cuốn băng cassette của Elton John. Ông ta với tay về phía con dao.',
      'Tôi mê nhạc Elton John! Nhanh tay đưa cuốn băng cho ông ta.',
      'Một mất một còn! Bạn chộp lấy con dao trước và đâm ông ta.'
    ),
    new Story(
      'Bạn từ chối đi nhờ và tự loay hoay thay lốp. Do không chèn bánh cẩn thận, chiếc xe trượt dốc và đè bẹp bạn. (KẾT CỤC 1)',
      'Chơi lại từ đầu',
      ''
    ),
    new Story(
      'Bạn đâm người lái xe khiến ông ta mất lái. Chiếc xe lao thẳng qua lan can xuống vực sâu vách đá. Cả hai cùng tử nạn. (KẾT CỤC 2)',
      'Chơi lại từ đầu',
      ''
    ),
    new Story(
      'Bạn và người lạ cùng hát vang giai điệu Elton John suốt dọc đường. Ông ta thả bạn an toàn ở thị trấn kế tiếp và còn cho bạn tiền ăn tối. (KẾT CỤC 3)',
      'Chơi lại từ đầu',
      ''
    ),
  ];

  public getStory(): string {
    return this._storyData[this._storyNumber].storyTitle;
  }

  public getChoice1(): string {
    return this._storyData[this._storyNumber].choice1;
  }

  public getChoice2(): string {
    return this._storyData[this._storyNumber].choice2;
  }

  // Điều hướng phân nhánh cốt truyện theo chỉ số
  public nextStory(choiceNumber: 1 | 2): void {
    if (this._storyNumber === 0) {
      this._storyNumber = choiceNumber === 1 ? 2 : 1;
    } else if (this._storyNumber === 1) {
      this._storyNumber = choiceNumber === 1 ? 2 : 3;
    } else if (this._storyNumber === 2) {
      this._storyNumber = choiceNumber === 1 ? 5 : 4;
    } else if (this._storyNumber >= 3) {
      this.restart();
    }
  }

  public restart(): void {
    this._storyNumber = 0;
  }

  // Ở các story kết thúc (3, 4, 5), chỉ còn lựa chọn "Chơi lại", ẩn Choice 2
  public buttonShouldBeVisible(): boolean {
    return this._storyNumber < 3;
  }
}