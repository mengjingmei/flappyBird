/**
 * @constructor 小鸟构造函数
 * @param ctx 绘图环境
 * @param img 鸟图
 * @param widthFrame 一排的帧数
 * @param heightFrame 一列的帧数
 * @param x 鸟的起始X坐标
 * @param y 鸟的起始Y坐标
 */
function Bird(ctx, img, widthFrame, heightFrame, x, y) {
    this.ctx = ctx;
    this.img = img;
    this.widthFrame = widthFrame;
    this.heightFrame = heightFrame;
    this.x = x;
    this.y = y;
    //小鸟下落的速度
    this.speed = 10;
    //小鸟下落的加速度
    this.speedPlus = 0.7;

    //一个小鸟的宽和高
    this.width = this.img.width/this.widthFrame;
    this.height = this.img.height/this.heightFrame;
    //当前小鸟渲染帧数
    this.currentFrame = 0;
}
//给原型扩展方法
Bird.prototype = {
    constructor: Bird,

    //绘制鸟
    draw: function() {
        //给小鸟一个旋转效果
        //先把前面的画面保存，防止整个画面一起旋转
        this.ctx.save();
        /*
        1、平移到小鸟的中心点
        2、然后根据下落的速度旋转坐标系
        3、绘制小鸟，但是绘制的x和y变为负的宽高一半
         */

        //默认10度
        var baseRadian = Math.PI/180*10;
        //最大和最小角度
        var maxRadian = Math.PI/180*70;

        //根据小鸟速度确定旋转角度
        var rotateRadian = baseRadian * this.speed/2;
        rotateRadian = rotateRadian > maxRadian ? maxRadian:rotateRadian;

        this.ctx.translate(this.x+this.width/2, this.y+this.height);
        this.ctx.rotate(rotateRadian);

        this.ctx.drawImage(this.img, 0, this.currentFrame*this.width, this.width, this.height, -this.width/2, -this.height/2, this.width, this.height);

        this.ctx.restore();
    },
    //更新当前鸟状态显示和加速下落
    update: function () {
        this.currentFrame++;
        this.currentFrame = this.currentFrame >= this.heightFrame ? 0:this.currentFrame;
        this.y += this.speed;
        this.speed += this.speedPlus;
        //摔死状态
        // if(this.y > 0.9*this.ctx.height) {
        //     this.y = 0.9*this.ctx.height;
        //     this.speed = 0;
        //     this.speedPlus = 0;
        // }
    },

    //绑定事件,点击让小鸟上升，上升10px
    _bind: function () {
        var self = this;
        this.ctx.canvas.addEventListener("click", function () {
            self.speed = -8;
        });
    }
};