!function(){
    var duration = 50
    $('.actions').on('click','button',function(e){
      let $button = $(e.currentTarget)//正在监听的
      let speed = $button.attr('data-speed')
      $button.addClass('active')
        .siblings('.active').removeClass('active')
      switch(speed){
        case 'slow':
        duration = 100;
        break
        case 'normal':
        duration = 50;
        break 
        case 'fast':
        duration = 10;
        break
      }  
    })
      function writeCode(prefix,code,fn){
          let container = document.querySelector('#code')
          let styleTag = document.querySelector('#styleTag')
          let n = 0
          setTimeout(function run(){
              n += 1
              container.innerHTML = code.substring(0,n)
              styleTag.innerHTML = code.substring(0,n)
              container.scrollTop = container.scrollHeight
              if(n < code.length){
                  setTimeout(run,duration)
              }else{
                fn && fn.call()
              }
          },duration)
      }
    let code = `
    /*
    * 首先，准备一张画板
    */
      .preview{
        border:1px solid #ddd;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .minions{
        width: 260px;
        height: 430px;
        position: relative;
      }
      /*
      * 首先，画脑袋
      */
      .head{
        position: absolute;
        top:55px;
        width: 260px;
        height: 300px;
        background: #ffe340;
        border-top-left-radius:30px;
        border-top-right-radius:30px;
      }
      /*
      * 画绑带
      */
      .strap{
        position: absolute;
        height: 50px;
        width: 260px;
        border:1px solid;
        top: 55px;
        background: #1c1c1c;
      }
      /*
      * 画眼镜
      */
      .glass{
        position: absolute;
        width: 110px;
        height: 110px;
        border: 13px solid #707070;
        border-radius: 50%;
        background: #fff;
        top: 40px; 
      }
      .glass.right{
        left:50%;
      }
      .glass.left{
        right:50%;
      }
      /*
      * 画眼睛
      */
     .eye{
        position: absolute;
        width: 60px;
        height: 60px;
        border: 14px solid #5b350a;
        border-radius: 50%;
        top:12px;
        background: #000;
        margin-left:12px;
      }
      .eye::before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        top:3px;
        margin-left:3px;
      }
      /*
      * 画小嘴巴
      */
      .lip{
        position: absolute;
        width: 50px;
        height: 30px;
        top:185px;
        left:50%;
        margin-left:-25px;
        border:5px solid #1c1c1c;
        border-bottom-right-radius:40px 20px;
        border-bottom-left-radius:40px 25px;
        border-top:none;
        border-left:none;
        border-right:none;
        
      }
      /*
      * 画头发
      */
      .hair{
        position: absolute;
        width: 55px;
        height: 55px;
        border:2px solid #1c1c1c;
        border-top:none;
        border-bottom:none;
      }
      .hair.right{
        left:50%;
        border-right:none;
        border-top-left-radius:40px;  
      }
      .hair.left{
        right:50%;
        border-left:none;
        border-top-right-radius:40px;  
      }
      /*
      * 画裤子
      */
      .paints{
        position: absolute;
        bottom:25px;
        width: 260px;
        height: 50px;
        border: #2f54a2 solid;
        background-color: #2f54a2; 
        border-bottom-right-radius:40px 20px;
        border-bottom-left-radius:40px 25px; 
      }
      /*
      * 画鞋子
      */
     .shoes{
        position: absolute;
        bottom:0;
        width:40px;
        height: 25px;
        background: #000;
        border-radius:40px 40px 10px 10px;
      }
      .shoes.right{
        left:50%;
        transform:translateX(50%);
      }
      .shoes.left{
        right:50%;
        transform:translateX(-50%);
      }
      /*
      * 画好了，一个小黄人送给你
      */`
    writeCode('',code)  
}.call()