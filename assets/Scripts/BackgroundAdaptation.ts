// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    update() {
        this.checkOrientation();
    }

    checkOrientation() {
        const frameSize = cc.view.getFrameSize();
        if (frameSize.width > frameSize.height) {
            // Ориентация горизонтальная (ландшафтная)

            this.node.scale = 3.2;
            console.log("Телефон в горизонтальном состоянии");
        } else {
            // Ориентация вертикальная (портретная)
            this.node.scale = 1;
            console.log("Телефон в вертикальном состоянии");
        }
    }
}
