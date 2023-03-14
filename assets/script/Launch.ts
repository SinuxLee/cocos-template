import { View } from "../gg/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class extends View {
    protected onLoad(): void {
        View.emitter.once('test', () => {
            cc.log('test event')
        })

        View.emitter.once('test', this.test, this)
        View.emitter.once('test', this.test.bind(this, 123))
        View.emitter.emit('test')
    }

    protected start(): void {

    }

    test(arg) {
        cc.log('test callback', arg)
    }

    protected update(dt: number): void {
        View.emitter.emit('test')
    }
}
