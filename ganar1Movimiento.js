/* Pegar en la consola*/
GameManager.prototype.isGameTerminated = function () {
  mod = this.over || (this.won && !this.keepPlaying);
  this.won = true;
  return mod;
};