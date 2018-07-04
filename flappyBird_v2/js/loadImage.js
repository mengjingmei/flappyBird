    /**
     * 加载图片
     * @param imgUrl 图片资源的路劲信息
     * @param callBack 回调函数 当所有的图像加载完毕后，被调用，同时把所有的图片资源传过去
     */
    function loadImage(imgUrl, callBack) {
        /**思路：
         * 1、遍历imgObj，动态创建img对象，然后为其指定src
         * 2、在加载图片的过程中，需要监听每一张img的onload事件
         * 3、当所有的img都触发onload事件后，调用回调函数，把所有的图片资源传过去
         */

        //存储图片资源
        var imgObj = {};
        var tempImg;
        //记录已经加载完事件数量
        var imgLoaded = 0;
        //统计要加载的图片数量
        var imgLength = 0;

        for(var key in imgUrl) {

            imgLength++;
            //根据遍历到的url,加载图片
            tempImg = new Image();
            //给所有图像监听load事件
            tempImg.onload = function() {
                imgLoaded++;
                //当所有的img都触发onload事件后，调用回调函数，把所有的图片资源传过去
                if(imgLoaded >= imgLength) {
                    callBack(imgObj);
                }
            };
            tempImg.src = imgUrl[key];
            //把当前加载的图像存储起来
            imgObj[key] = tempImg;
        }

    }

