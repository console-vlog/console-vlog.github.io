
function getEtalase(){
  $('#data-produk').html('');
  $('#loading').show();
  $.ajax({
    url: 'http://gsx2json.com/api?id=1AH4L7a1wloY9qzehffZqcS-UrK08uKnbFTthMNR5JVI&sheet=produk_shopee',
    type: 'GET',
    dataType: 'json',
    data: {},
    success:function(s){
      console.log(s);
      let data = s.rows;
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