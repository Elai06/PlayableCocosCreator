import { Card } from "./CardsLogic/Card";
import MockDataFeeder from "./MockDataFeeder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CardSwitch extends cc.Component {
  @property(cc.Button) button: cc.Button = null;
  @property(MockDataFeeder) mockDataFeeder: MockDataFeeder;
  @property(cc.Node) content: cc.Node;

  private cardsIndex: number = 0;
  private selectedCard: Card;

  start() {
 //   this.button.node.on("click", this.OnClick, this);

    this.FillCards();
  }

  OnClick() {
    if (this.cardsIndex >= this.mockDataFeeder.cards.length) return;
    this.cardsIndex++;

    // this.UpdateIndex(this.selectedCard);

    this.FillCards();
  }

  UpdateIndex(selectedCard: Card) {
    if (this.cardsIndex >= this.mockDataFeeder.cards.length) return;
    this.selectedCard = selectedCard;
  }

  FillCards() {
    console.log('Fill Cards');
    for (let index = 0; index < this.content.childrenCount; index++) {
      var card = this.content.children[index].getComponent(Card);
      var sprite =
        this.mockDataFeeder.cards[this.cardsIndex].cardIds[card.index];
      card.UpdateSprite(sprite);
    }
  }
}
