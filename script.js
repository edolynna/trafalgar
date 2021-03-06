$(document).ready(function() {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $('.cusromer-say__container');
  const track = $('.cusromer-say__track');
  const box = $('.cusromer-say__box');
  const btnPrev = $('.buttons__btn-prev');
  const btnNext = $('.buttons__btn-next');
  const boxCount = box.length;
  const boxWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * boxWidth;

  box.each( function(index, item) {
    $(box).css({
      minWidth: boxWidth, 
    });
  });

  btnPrev.click(function() {
    // const boxLeft

    position += movePosition;

    setPosition();
    checkBtns();
  });

  btnNext.click(function() {
    const boxLeft = boxCount - (Math.abs(position) + slidesToShow * boxWidth) / boxWidth;

    position -= movePosition;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    })
  }

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
      'disabled',
      position <= -(boxCount - slidesToShow) * boxWidth
      );
  };

  checkBtns();
});