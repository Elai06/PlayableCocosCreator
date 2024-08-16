const { ccclass, property } = cc._decorator;

@ccclass('GameManager')
export class GameManager extends cc.Component {
    
    start() {
        if (typeof window['gameStart'] === 'function') {
            (window as any).gameStart();
          }
    }

    onDestroy() {
        if (typeof window['gameClose'] === 'function') {
            (window as any).gameClose();
          }
    }
}

