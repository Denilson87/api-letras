
//funcao para fazer o fetch da letra na tela pegando da api
function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);

}
//funcao para cancelar o envento default do fetch na tela
const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el =>{
    el.preventDefault();
    doSubmit();

})
//criando a funcao para fazer a submicao da nossa query usando ''then'' 
//function doSubmit() {

   // const lyrics_el = document.querySelector("#lyrics");
    //const artist = document.querySelector("#artist");
    //const song = document.querySelector("#song");

    //lyrics_el.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Carregando...</span></div>';
    // fazendo uma chamada usando ''then''
   // findLyrics(artist.value, song.value)
      //  .then(response => response.json())
      //  .then(data => {

        //    if (data.lyrics) {
         ///       lyrics_el.innerHTML = data.lyrics;
            ///} else {
               /// lyrics_el.innerHTML = data.error;
            ///}
        ///})
        ///.catch(err => {
          ///  lyrics_el.innerHTML = `opps! ${err}`;
        ///})
        ///}


//criando a funcao para fazer a submicao da nossa query
//usando async await 
 async function doSubmit() {

    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    lyrics_el.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Carregando...</span></div>';
  
        // fazendo uma chamada usando ''async await''

             const lyricsResponse  = await findLyrics(artist.value, song.value);
             const data = await lyricsResponse.json();
             lyrics_el.innerHTML = data.lyrics;

 }
