const { ccclass, property } = cc._decorator;

@ccclass
export default class CardsData {
  @property() titul: string = "";
  @property(cc.SpriteFrame) cardIds: cc.SpriteFrame[] = [];
}
