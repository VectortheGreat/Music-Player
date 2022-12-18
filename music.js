class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Pink Venom", "BlackPink", "1.jpg", "1.mp3"),
  new Music("Bloody Marry", "Lady Gaga", "2.jpg", "2.mp3"),
  new Music("Chilla Chilla", "Thunivu", "3.jpg", "3.mp3"),
];
