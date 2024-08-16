import CardSwitch from "../CardSwitch";
import { Card } from "./Card";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScrollHandler extends cc.Component {
  @property(cc.Sprite) touchSprite: cc.Sprite;
  @property(CardSwitch) cardSwitch: CardSwitch;

  private cards: Card[] = [];
  scrollView: cc.ScrollView = null;

  private cardWidth: number = 0;

  onLoad() {
    this.scrollView = this.getComponent(cc.ScrollView);

    this.touchSprite.node.on("touchend", this.OnTouchEnd, this);
    this.touchSprite.node.on(
      cc.Node.EventType.TOUCH_CANCEL,
      this.OnTouchEnd,
      this
    );
    this.FillCards();
    this.cardWidth = 545;
  }

  private FillCards() {
    let content = this.scrollView.content;
    for (let index = 0; index < content.childrenCount; index++) {
      var card = content.children[index].getComponent(Card);
      card.index = index;
      this.cards[index] = card;
    }
  }

  private OnTouchEnd() {
    var cardIndex = Math.round(
      this.scrollView.content.position.x / -this.cardWidth
    );

    var newPosition = new cc.Vec3(-this.cardWidth * cardIndex, 0, 0);

    cc.tween(this.scrollView.content)
      .to(0.3, { position: newPosition })
      .call(() => {
        this.cards.forEach((card) => {

          if (card.isSelected) {
          //  this.cardSwitch.UpdateIndex(card);
          }
        });
      })
      .start();
  }
}
