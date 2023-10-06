document.addEventListener('DOMContentLoaded', () => {

  // Remove Top Bar Header./Start
  const removeTopbar = () => {
    const closeTop = document.querySelector('.close-top-header');
    const topHeader = document.querySelector('.top-header');
    closeTop.addEventListener('click', ()=> {
      topHeader.remove();
    })
  }
  removeTopbar();

  // Tabs Menu MAIN./Start
  const tabsMenumain = () => {
    const menuMain = document.querySelectorAll('.menu-main');
    const buttonMenu = document.querySelectorAll('.button-menu button');
    buttonMenu.forEach((button, index)=> {
      button.addEventListener('click', ()=> {
        // Xoa het tat ca active o nut button hien tai
        buttonMenu.forEach((item)=> {
          item.classList.remove('active');
        })
        // Xoa het class active o menu-main hien tai
        menuMain.forEach((item)=> {
          item.classList.remove('active');
        });
        // Them active vao khi bam button
        button.classList.add('active');
        // Them active vao menu voi gia tri button da bam
        menuMain[index].classList.add('active');
      })
    })

  }
  tabsMenumain();


  // Tabs Project
  const tabsProject = () => {
    // Truy cap phan tu
    const btnDeals = document.querySelectorAll('.btn-hot');
    const contentTabs = document.querySelectorAll('.content-tabs');
    // console.log(contentTabs)

    btnDeals.forEach((button, index) => {
      // console.log(button);
      button.addEventListener('click', ()=> {
        // xoa active button
        btnDeals.forEach((item)=> {
          item.classList.remove('active');
        });
        // xoa active content tabs
        contentTabs.forEach((value)=> {
          value.classList.remove('active');
        });

        // Them lai
        button.classList.add('active');
        contentTabs[index].classList.add('active');
      })
    })
  }
  tabsProject();

  const countDown = () => {
    // Ngay het chuong trinh so voi 1-1-1970
    let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

    let timerFn = setInterval(()=> {
      // Ngay hien tai cua minh so voi 1-1-1970
      let now = new Date().getTime();

      // Khoang thoi gian tu ngay chuong trinh dien ra toi ngay hien tai cua minh
      let distance = countDownDate - now;
      

      //Cong Thuc tinh Ngay Thang Nam Phut con lai
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hous = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Hien thi no ra ben ngoai
      document.querySelector('.hous').innerHTML = hous;
      document.querySelector('.minutes').innerHTML = minutes;
      document.querySelector('.seconds').innerHTML = seconds;

      // Het thoi gian
      if(distance < 0) {
        clearInterval(timerFn);
      }
    }, 1000);
  }
  countDown();
});