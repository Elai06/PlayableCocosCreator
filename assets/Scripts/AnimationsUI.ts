const {ccclass, property} = cc._decorator;
@ccclass
export default class AnimationsUI extends cc.Component {

    @property(cc.Sprite) private label: cc.Sprite = null;
    @property() private duration: number = 1;

    onEnable() {
        this.createFadeAnimation(this.label.node)
    }

    onDisable() {
    }

    createFadeAnimation(node) {
        cc.tween(this.label.node)
            .to(0, {opacity: 0})
            .to(this.duration, {opacity: 255})
            .union()
            .start();
    }
}

