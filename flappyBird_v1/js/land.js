/**
 * @constructor  大地背景构造函数
 * @param ctx 绘图环境
 * @param img 背景图片
 * @param speed 背景速度

 */
function Land(ctx, img, speed) {
    this.ctx = ctx;
    this.img = img;
    //不传速度的时候默认2
    this.speed = speed || 2;
    this.width = this.img.width;
    this.height = this.img.height;

    //创建一个实例，num自增
    Land.num++;
    //背景位置
    this.x = this.width * (Land.num-1);
    this.y = this.ctx.height-this.img.height;

}
//Land实例的默认数量
Land.num = 0;
//给原型扩充方法
Land.prototype = {
    constructor: Land,
    //绘制背景
    draw: function () {
        this.ctx.drawImage(this.img, this.x, this.y);
    },
    //更新当前背景显示
    update: function () {
        this.x -= this.speed;
        //第一张背景走完，第一张拼接到第二张后面
        if(this.x <= -this.width) {
            this.x += this.width*2;
        }
    }
};