
function getEtalase(){
  $('#data-produk').html('');
  $('#loading').show();
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzr6jYxSKFOb4jHh_l96aJebTHs4ZDNVGa-u0KU9qMoHPCbWFhoABQGiGJQQ9IMMu-e/exec?sheet=produk_shopee',
    type: 'GET',
    dataType: 'json',
    data: {},
    success:function(s){
      console.log(s);
      let data = s;
      data.forEach((d,i) => {
        $('#data-produk').append(`
          <div class="col-md-3">
            <div class="card">
              <img src="${ d.Gambar && d.Gambar.trim() !== '' ? d.Gambar : 'https://balimall.id/dist/img/no-image.png' }" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${ d.No }</h5>
                <p class="card-text">${ d.Nama || 'Tanpa Judul' }</p>
                <a href="${ d.Link || '#' }" class="btn btn-primary" target="_blank">Detail Lengkap</a>
              </div>
            </div>
          </div>
        `);
      });
    },
    error:function(e){
      console.log(e.responseText);
    },
    complete: function () {
      $('#loading').hide();
    }
  });
}

getEtalase();