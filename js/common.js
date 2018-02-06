var font = new FontFaceObserver('pingfang');
    font.load().then(function () {
      document.documentElement.className += ' webfont-loaded';
    });