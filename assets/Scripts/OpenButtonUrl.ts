const { ccclass, property } = cc._decorator;

const androidMarketUrl =
  "https://play.google.com/store/apps/details?id=com.pridegames.risenhero";

@ccclass("OpenButtonUrl")
class OpenButtonUrl extends cc.Component {
  @property() private minScale: number = 1;
  @property() private maxScale: number = 1.2;
  @property() private duration: number = 1;
  @property(cc.SpriteFrame) private redButton: cc.SpriteFrame = null;
  @property(cc.SpriteFrame) private greenButton: cc.SpriteFrame = null;
  @property(cc.Sprite) private sprite: cc.Sprite = null;

  button: cc.Button = null;

  private scaleTween: cc.Tween<Node> = null;

  onEnable() {
    this.button = this.getComponent(cc.Button);

    this.button.node.on("click", this.openMarket, this);
    this.button.node.on("touchstart", this.touchStart, this);
    this.button.node.on("touchcancel", this.touchCancel, this);

    this.createLoopingScaleAnimation(this.node);
  }

  onDisable() {
    this.button.node.off("click", this.openMarket, this);
    this.button.node.off("touchstart", this.touchStart, this);
    this.button.node.off("touchcancel", this.touchCancel, this);
    this.scaleTween.stop();
  }

  createLoopingScaleAnimation(node) {
    this.scaleTween = cc.tween(node)
      .to(this.duration, { scale: this.minScale })
      .to(this.duration, { scale: this.maxScale })
      .union()
      .repeatForever()
      .start();
  }

  openMarket() {
    this.createLoopingScaleAnimation(this.node);

 //   openAd();
  }

  touchStart(event: cc.Event) {
    this.scaleTween.stop();

    this.pressedAnimation(0.85);
  }

  pressedAnimation(newScale: number) {
    cc.tween(this.node)
      .to(0.2, { scale: newScale })
      .union()
      .start();
  }

  touchCancel(event: Event) {
    this.createLoopingScaleAnimation(this.node);
  }
}

function openAd() {
  if (typeof window["onCtaClick"] === "function") {
    (window as any).onCtaClick();
    if (typeof window["gameFinish"] === "function") {
        (window as any).gameFinish();
    }
  } else {
    console.log("onCtaClick function is not available.");
    window.open(androidMarketUrl, "_blank");
  }
}
