/**
 * @constructor 管道构造函数
 * @param ctx 绘图环境
 * @param imgDown 向下管道
 * @param imgUp 向上管道
 * @param space 空白可能通道距离
 * @param speed 向左移动速度
 */
function Pipe(ctx, imgDown, imgUp, space, speed, landHeight) {
    this.ctx = ctx;
    this.imgDown = imgDown;
    this.imgUp = imgUp;
    this.space = space;
    this.speed = speed;
    this.landHeight = landHeight;
    //管道实例个数
    Pipe.num++;
    //管道默认宽高
    this.width = imgDown.width;
    this.height = imgDown.height;
    //计算多个管道的位置
    this.x = this.ctx.width+(Pipe.num-1)*this.width*4;
    this.y = 0;

    //初始化
    this.init();
    this.draw();
    this.drawPath();
}
//设置管道默认实例个数
Pipe.num = 0;

// //扩展原型方法
// extend( Pipe.prototype, {
//     //初始化管道坐标
//     init: function () {
//         //管道最小高度
//         var minHeight = 50;
//         //管道最大高度-管道最小高度
//         var maxHeight = this.ctx.height-this.landHeight-this.space -minHeight*2;
//         //管道高度随机
//         var pipeDownRanderHeight = Math.random()*maxHeight + minHeight;
//         //上管道的高度
//         this.downY = pipeDownRanderHeight - this.height;
//     },
//
//     //绘制管道
//     draw: function () {
//         this.ctx.drawImage(this.imgDown, 40, 0 ,this.width, this.height);
//     }
//
// } );
//给原型拓展方法
Pipe.prototype = {
    constructor: Pipe,

    //初始化管道坐标
    init: function () {
        //管道最小高度
        var minHeight = 50;
        //管道最大高度-管道最小高度
        var maxHeight = this.ctx.height-this.landHeight-this.space -minHeight*2;
        //管道高度随机
        var pipeDownRanderHeight = Math.random()*maxHeight + minHeight;
        //上管道的Y坐标
        this.downY = pipeDownRanderHeight - this.height;
        //下管道的Y坐标
        this.upY = pipeDownRanderHeight + this.space;
    },

    //绘制管道
    draw: function () {
        this.num++;
        this.ctx.drawImage(this.imgDown, this.x, this.downY ,this.width, this.height);
        this.ctx.drawImage(this.imgUp, this.x, this.upY ,this.width, this.height);
    },

    //根据管道的宽高绘制管道的路径
    drawPath: function(){
        this.ctx.rect(this.x, this.downY, this.width, this.height);
        this.ctx.rect(this.x, this.upY, this.width, this.height);
        //让路径颜色透明
        this.ctx.strokeStyle = "rgba(0,0,0,0)";
        this.ctx.stroke();
    },
    //更新下一帧数据
    update: function () {
        this.x -= this.speed;
        //走出画布后，在随机一对管道在最右边出现
        if(this.x <= -this.width) {
            this.x = this.ctx.canvas.width;
            this.init();
        }
    }

}
