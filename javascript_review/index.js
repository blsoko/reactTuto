function Mage (wand, tunica, hat) {
    this.wand = wand,
    this.tunica = tunica,
    this.hat = hat
};

Mage.prototype.showmeyourpower = function() {
    return `My weapon ${this.wand}, with my ${this.tunica} and my ${this.hat} make me invencible`;
};
const BestMage = new Mage('Eye of Storm', 'Almadeon Solaris', 'Wich Monkey');
// console.log(BestMage);
// console.log(BestMage.showmeyourpower());
// console.log(BestMage.wand)