var fs_embed = {
  generate: function(url, width, height) {
    var embedCode = '<div style="position:relative;padding-bottom:' + (height / width * 100) + '%;height:0;">' +
                      '<iframe src="' + url + '" frameborder="0" style="position:absolute;width:100%;height:100%;top:0;left:0;"></iframe>' +
                    '</div>';
    return embedCode;
  }
};
