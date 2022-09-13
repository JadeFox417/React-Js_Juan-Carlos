class Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    this.totalRoda = totalRoda;
    this.kecepatanPerJam = kecepatanPerJam;
  }
}

class Mobil extends Kendaraan {
  constructor(totalRoda, kecepatanPerJam) {
    super(totalRoda, kecepatanPerJam);
  }

  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }
  berjalan() {
    return console.log(`${this.totalRoda} wheel car is moving at speed : ${this.kecepatanPerJam}`);
  }
}

const mobilCepat = new Mobil(4, 0);
mobilCepat.tambahKecepatan(10);
mobilCepat.tambahKecepatan(10);
mobilCepat.tambahKecepatan(10);

const mobilLamban = new Mobil(4, 0);
mobilLamban.tambahKecepatan(10);

mobilCepat.berjalan(); // 4 wheel car is moving at speed : 30
mobilLamban.berjalan(); //4 wheel car is moving at speed : 10
