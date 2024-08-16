const {ccclass, property} = cc._decorator;

@ccclass('ScaleAnimation')
export class ScaleAnimation extends cc.Component {

    @property() private minScale: number = 1;
    @property() private maxScale: number = 1.2;
    @property() private duration: number = 5;

    private scaleTween: cc.Tween<Node> = null;

    onEnable() {
        this.createLoopingScaleAnimation(this.node);
    }

    onDisable() {
this.scaleTween.stop();
    }


    createLoopingScaleAnimation(node) {
        this.scaleTween = cc.tween(node)
            .to(this.duration, {scale: this.maxScale})
            .to(this.duration, {scale: this.minScale})
            .union()
            .repeatForever()
            .start();
    }

}


