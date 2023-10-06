document.addEventListener("DOMContentLoaded", () => {
  const URL = `https://fakestoreapi.com/products`;

  // goi API
  const getApi = async (URL) => {
    let response = await axios.get(URL);
    // console.log(response.data);

    showService(response.data)
  }
  getApi(URL);

  // Show data Service
  const showService = (data) => {
    console.log(data);
    // Show JS
    const showData = document.querySelector('.show-js');

    let HTML = ``;
    data.forEach((item, index) => {
      if(index <= 3) {
        HTML = HTML + `
        <div class="col-12 col-sm-6 col-md-3">
           <div class="item">
           ${item.title}
           </div>
       </div>
        `;
      }

    });
    showData.innerHTML = HTML;

  }



});