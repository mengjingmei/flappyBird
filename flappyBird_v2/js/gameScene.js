function gameScene(ctx, gameMemberObj) {
    //绘制背景
    for(var i=0; i<gameMemberObj.sky.length; i++) {
        gameMemberObj.sky[i].draw();
        gameMemberObj.sky[i].update();
    }
    //先清除上次路径
    ctx.beginPath();
    //绘制管道
    for(var i=0; i<gameMemberObj.pipe.length; i++) {
        gameMemberObj.pipe[i].draw();
        gameMemberObj.pipe[i].drawPath();
        gameMemberObj.pipe[i].update();
    }
    //绘制大地
    for(var i=0; i<gameMemberObj.land.length; i++) {
        gameMemberObj.land[i].draw();
        gameMemberObj.land[i].update();
    }
    //绘制小鸟
    gameMemberObj.bird.draw();
    gameMemberObj.bird.update();
    gameMemberObj.bird._bind();
    //绘制分数
    gameMemberObj.score.draw();


}