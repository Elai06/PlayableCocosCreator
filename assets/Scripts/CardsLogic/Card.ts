const { ccclass, property } = cc._decorator;

@ccclass("Card")
export class Card extends cc.Component {
  @property private touchScale: number = 1.1;
  @property private minScale: number = 1;
  @property private scaleDuration: number = 0.3;
  @property(cc.Sprite) private sprite: cc.Sprite;

  private button: cc.Button;
  public isSelected: boolean;
  public index: number = 0;

  public siblingIndex: number = 0;

  private content: cc.Node;

  onLoad() {
    this.content = this.node.parent;
    this.siblingIndex = this.node.getSiblingIndex();
    this.OnContentPositionChanged();
    this.content.on(
      cc.Node.EventType.POSITION_CHANGED,
      this.OnContentPositionChanged,
      this
    );
  }

  startAnimation() {
    this.node.setSiblingIndex(10);
    this.isSelected = true;
  }

  public disableAnimation() {
    this.isSelected = false;
    this.node.setSiblingIndex(this.siblingIndex);
  }

  public updateView(newPosition: number) {
    if (this.node.scale > 1.1) {
      this.startAnimation();
    } else {
      this.disableAnimation();
    }
  }

  OnContentPositionChanged() {
    var width = Math.abs(this.node.width);
    var deltaPosition = Math.abs(
      this.content.position.x + this.node.position.x
    );
    if (deltaPosition < width) {
      var normalDistance = (width - deltaPosition) / width;
      this.node.scale = cc.misc.lerp(
        this.minScale,
        this.touchScale,
        normalDistance
      );

      this.updateView(-this.content.position.x);
    }
  }

  UpdateSprite(sprite: cc.SpriteFrame, isAnimation: boolean) {
    if (isAnimation) {

      this.node.rotation = 0;
      cc.tween(this.node)
        .to(0.5, { rotationX: 90 })
        .call(() => {
          this.sprite.spriteFrame = sprite;
        })
        .to(0.5, { rotationX: 0 })
        .start();
    } else {
      this.sprite.spriteFrame = sprite;
    }
  }
}
