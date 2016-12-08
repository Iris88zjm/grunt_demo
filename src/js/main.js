(function($){
  $(function(){
    var sources = [
      { id: 1, name: '@fashionambit', thumbnail: 'images/thumbnail.jpg', img: 'images/1.jpg', relevant: 'images/relevant1.jpg', message: 'fashionambit nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 2, name: '@karivdheide', thumbnail: 'images/thumbnail.jpg', img: 'images/2.jpg', relevant: 'images/relevant2.jpg', message: 'karivdheide nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 3, name: '@taramichellebrose', thumbnail: 'images/thumbnail.jpg', img: 'images/3.jpg', relevant: 'images/relevant1.jpg', message: 'karivdheide nspired by hashtags and store locations.', width: '235px', height: '235px',},
      { id: 4, name: '@1022mari22', thumbnail: 'images/thumbnail.jpg', img: 'images/4.jpg', relevant: 'images/relevant2.jpg', message: 'karivdheide nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 5, name: '@fashionambit', thumbnail: 'images/thumbnail.jpg', img: 'images/5.jpg', relevant: 'images/relevant1.jpg', message: 'fashionambit nspired by hashtags and store locations.',  width: '235px', height: '235px', },
      { id: 6, name: '@taminajay', thumbnail: 'images/thumbnail.jpg', img: 'images/6.jpg', relevant: 'images/relevant2.jpg', message: 'taminajay nspired by hashtags and store locations.', width: '235px', height: '235px',},
      { id: 7, name: '@juliesdresscode', thumbnail: 'images/thumbnail.jpg', img: 'images/7.jpg', relevant: 'images/relevant1.jpg', message: 'juliesdresscode nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 8, name: '@dani_nanaa', thumbnail: 'images/thumbnail.jpg', img: 'images/8.jpg', relevant: 'images/relevant2.jpg', message: 'dani_nanaa nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 9, name: '@cristinagheiceanu', thumbnail: 'images/thumbnail.jpg', img: 'images/9.jpg', relevant: 'images/relevant1.jpg', message: 'cristinagheiceanu nspired by hashtags and store locations.',  width: '475px', height: '475px', },
      { id: 10, name: '@charissa_goldapple', thumbnail: 'images/thumbnail.jpg', img: 'images/10.jpg', relevant: 'images/relevant2.jpg', message: 'charissa_goldapple nspired by hashtags and store locations.',  width: '235px', height: '235px', },
      { id: 11, name: '@herzundbild', thumbnail: 'images/thumbnail.jpg', img: 'images/11.jpg', relevant: 'images/relevant1.jpg', message: 'herzundbild nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 12, name: '@wietskeee91', thumbnail: 'images/thumbnail.jpg', img: 'images/12.jpg', relevant: 'images/relevant2.jpg', message: 'wietskeee91 nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 13, name: '@felicefleur', thumbnail: 'images/thumbnail.jpg', img: 'images/13.jpg', relevant: 'images/relevant1.jpg', message: 'felicefleur nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 14, name: '@_fashionsabs', thumbnail: 'images/thumbnail.jpg', img: 'images/14.jpg', relevant: 'images/relevant2.jpg', message: '_fashionsabs nspired by hashtags and store locations.',  width: '235px', height: '235px', },
      { id: 15, name: '@herz_aller_liebst', thumbnail: 'images/thumbnail.jpg', img: 'images/15.jpg', relevant: 'images/relevant1.jpg', message: 'herz_aller_liebst nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 7, name: '@juliesdresscode', thumbnail: 'images/thumbnail.jpg', img: 'images/7.jpg', relevant: 'images/relevant1.jpg', message: 'juliesdresscode nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 8, name: '@dani_nanaa', thumbnail: 'images/thumbnail.jpg', img: 'images/8.jpg', relevant: 'images/relevant2.jpg', message: 'dani_nanaa nspired by hashtags and store locations.', width: '235px', height: '235px',},
      { id: 9, name: '@cristinagheiceanu', thumbnail: 'images/thumbnail.jpg', img: 'images/9.jpg', relevant: 'images/relevant1.jpg', message: 'cristinagheiceanu nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 10, name: '@charissa_goldapple', thumbnail: 'images/thumbnail.jpg', img: 'images/10.jpg', relevant: 'images/relevant2.jpg', message: 'charissa_goldapple nspired by hashtags and store locations.', width: '235px', height: '235px', },
      { id: 11, name: '@herzundbild', thumbnail: 'images/thumbnail.jpg', img: 'images/11.jpg', relevant: 'images/relevant1.jpg', message: 'herzundbild nspired by hashtags and store locations.', width: '235px', height: '235px', },
    ];
    _.each(sources, function(s) {
      $('.grid').append('<div class="grid-item" data-id="'+ s.id +'"><img src="'+ s.img +'" width="' + s.width + '"height="' + s.height + '"></div>');
    });
    $('.grid').masonry({
      itemSelector: '.grid-item',
      gutter: 5
    });
    var detail = _.template($('#info').html());
    $('.grid').on('click', '.grid-item', function(){
      $('.info').addClass('active');
      id = $(this).attr('data-id');
      _.each(sources, function(s) {
        if(id == s.id){
          $('.info').append(
              detail({
                    img: s.img,
                    thumbnail: s.thumbnail,
                    relevant: s.relevant,
                    message: s.message,
                    name: s.name
              })
          );
          var $overlay = $('.show-overlay');
          if ($overlay.length <= 0) {
              $('.info').append('<div class="show-overlay"></div>');
          }
        }
      });
    });

    $('.info').on('click', '.btn-close', function() {
      $('.info').removeClass('active');
      $('.detail').remove();
      $('.show-overlay').remove();
    });
  });
})(jQuery);