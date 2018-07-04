/**
 *
 * @param ctx
 * @param x 分数显示位置X坐标
 * @param y 分数显示位置Y坐标
 * @constructor 分数构造函数
 */
function Score(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    //默认分数为0
    this.num = 0;
}
//为原型扩展方法
Score.prototype = {
    constructor: Score,

    draw: function () {
        this.ctx.fillStyle = "rgba(255,0,0,1)";
        this.ctx.fillRect(0, 0, 75, 25);
        this.ctx.fillStyle = "rgba(255,255,255,0.8)";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.font = "900 15px 微软雅黑";
        this.ctx.fillText("得分："+this.num.toString(), 35, 12);
    },
    update: function () {
        //更新分数
        this.num += 5;
    }
};

//造分数工厂函数
function createScore(ctx) {
   var score = new Score(ctx, 0, 0);
   return score;
}