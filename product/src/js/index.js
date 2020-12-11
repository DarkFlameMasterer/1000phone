class Slider{
    constructor(){
        this.big_box = $('.banner');
        this.big_img = $('.banner_con li');
        this.bottom = $('.banner_bottom');
        this.b_img = $('.small_img a');
        this.num = this.big_box.length;
        this.index = 0;
        this.timer = null;
        this.sm_part = $('.banner_li_div');
        this.addEvent();
        this.slider()
        this.time();
        console.log(this.b_img);
    }
    addEvent(){
        let _this = this ;
        this.big_box.on({
            'mouseenter':function(){
                _this.bottom.animate({'bottom':'0'});
            },
            'mouseleave':function(){
                _this.bottom.animate({'bottom':'-65px'});
            }
        })

        this.b_img.each(function(i,value){
            $(value).on('mouseenter',function(){
                _this.index = i;
                clearInterval(_this.timer);
                _this.time();
                _this.slider();
            })
        })

    }
    time(){
        let _this = this; 
        this.timer = setInterval(() => {
            _this.index ++ ;
            
            if(_this.index === 4){
                _this.index = 0;
            }
            _this.slider();
        }, 3000);
    }
    slider(){
        let _this = this;
        this.big_img.each(function(i,value){
            $(value).animate({'opacity':'0'});
        });
        this.big_img.eq(this.index).animate({'opacity':'1'});
        this.b_img.each(function(i,value){
            $(value).css({'border':'0'});
        });
        this.b_img.eq(this.index).css({'border':'1px solid yellow'});

    }
}
new Slider();