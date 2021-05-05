$(function () {
    const $btn = $('.button--bubble');
        const $circlesTopLeft = $btn.parent().find('.circle.top-left');
        const $circlesBottomRight = $btn.parent().find('.circle.bottom-right');

        const tl = new TimelineLite();
        const tl2 = new TimelineLite();
      
        const btTl = new TimelineLite({ paused: true });
    
        tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, ease: SlowMo.ease.config(0.1, 0.7, false) });
        tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2', filter: 'hue-rotate(-0.25turn)' });
        tl.to($circlesTopLeft.eq(1), 0.1, { scale: 0.8, x: '-=10', y: '-=7', filter: 'hue-rotate(90deg)'  }, '-=0.1');
        tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' , filter: 'hue-rotate(3.142rad)'}, '-=0.1');
        tl.to($circlesTopLeft.eq(0), 2, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
        tl.to($circlesTopLeft.eq(1), 3, { scale: 0.6, x: '-=20', y: '-=10', opacity: 0 }, '-=3');
        tl.to($circlesTopLeft.eq(2), 2, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=2');
    
        
        const tlBt1 = new TimelineLite();
        const tlBt2 = new TimelineLite();

        tlBt1.set($circlesTopLeft, { x: 0, y:0, rotation: -45 });
        tlBt1.add(tl);
      
        tl2.set($circlesBottomRight, { x: 0, y: 0 });
        tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
        tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3', filter: 'hue-rotate(-0.25turn)' });
        tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3', filter: 'hue-rotate(90deg)' }, '-=0.1');
        tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6', filter: 'hue-rotate(3.142rad)' }, '-=0.2');
        tl2.to($circlesBottomRight.eq(0), 3, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
        tl2.to($circlesBottomRight.eq(1), 3, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=3');
        tl2.to($circlesBottomRight.eq(2), 3, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=3');

        
        tlBt2.set($circlesBottomRight, { rotation: 45 });
        tlBt2.add(tl2);
      
        btTl.add(tlBt1);
        btTl.to($btn.parent().find('.button.button--bubble'), 0.8, { scaleY: 1.1 }, 0.1);
        btTl.add(tlBt2, 0.2);
        btTl.to($btn.parent().find('.button.button--bubble'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);
      
    
        btTl.timeScale(2.6);
      
        $btn.on('mouseover click', function() {
          btTl.restart();
        });

        $btn.on('click', function() {
            send();
            function send(){
                let payload = {"text": $('.massage').val()} 
                $.ajax({ type : "POST", 
                url : "https://hooks.slack.com/services/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",
                    dataType : "application/json", data : JSON.stringify(payload) })
                    .complete(()=>{
                        $('.massage').val('');
                    });
                }
          });
    
});

