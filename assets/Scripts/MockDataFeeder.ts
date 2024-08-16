import CardsData from "./CardsLogic/CardsData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MockDataFeeder extends cc.Component {
  @property(CardsData) cards: CardsData[] = [];
}
