/**
 * @constructor 游戏结束场景构造函数
 * @param ctx 绘图环境
 */
function OverScene(ctx) {
    this.ctx = ctx;
}
//为原型扩展方法
OverScene.prototype.draw = function (score) {
    this.ctx.save();

    this.ctx.fillStyle = "rgba(127,127,127,0.5)";
    this.ctx.fillRect(0, 0, this.ctx.width, this.ctx.height);
    this.ctx.fillStyle = "rgba(255,255,255,0.8)";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = "900 30px 微软雅黑";
    this.ctx.fillText("GAME OVER!", this.ctx.canvas.width/2, this.ctx.canvas.height/2);
    //显示总得分
    this.ctx.fillText("总得分:"+score, this.ctx.canvas.width/2, this.ctx.canvas.height/2+30);
    this.ctx.restore();
};

//造游戏结束画面工厂函数
function createOverScene(ctx) {
    var overScene = new OverScene(ctx);
    return overScene;
}