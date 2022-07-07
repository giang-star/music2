
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);    
        const heading= $('header h2')
      const cdThumb=$('.cd-thumb')
      const audio=$('#audio')
      const playBtn=$('.btn-toggle-play')
      const player= $('.player')
      const progress=$('#progress')
      const prevBtn = $(".btn-prev")
      const nextBtn = $(".btn-next")
      const randomBtn = $(".btn-random")
      const repeatBtn = $(".btn-repeat");
      const playlist = $(".playlist");
      const time_start = $('.controls_time--left');
      const time_count = $('.controls_time--right');
      const cons= $('.cons')
      let lines = document.querySelectorAll('.vertical');


        const app = {
          currentIndex:0,
          isPlaying: false,
          isRandom: false,
          isRepeat:false,
    songs: [
      {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: "./music/Sunflower_-_Post_Malone__Swae_Lee (1).mp3",
        image: "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Tu Phir Se Aana",
        singer: "Raftaar x Salim Merchant x Karma",
        path: "./music/Khac-Biet-To-Lon-Hon-Trinh-Thang-Binh-Liz-Kim-Cuong.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Naachne Ka Shaunq",
        singer: "Raftaar x Brobha V",
        path:
          "./\music/Vi-Me-Anh-Bat-Chia-Tay-Miu-Le-Karik-Chau-Dang-Khoa.mp3",
        image: "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Chi-Can-Co-Em",
        singer: "Duong-Edward",
        path: "./music/Chi-Can-Co-Em-Duong-Edward.mp3",
        image:
          "./music/36570424_2161085830789359_8131048698273595392_n.jpg"
      },
      {
        name: "Thuong-Em",
        singer: "Chau-Khai-Phong",
        path: "./music/Thuong-Em-Chau-Khai-Phong-ACV.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "TeThatAnhNhoEm",
        singer: "ThanhHung",
        path:
          "./music/TeThatAnhNhoEm-ThanhHung-7132634.mp3",
        image:
          "https://avatar-ex-swe.nixcdn.com/song/2022/03/03/0/1/3/6/1646267009685_500.jpg"
      },
      {
        name: "ChayKhoiTheGioiNay",
        singer: "DaLABPhuongLy",
        path: "./music/ChayKhoiTheGioiNay-DaLABPhuongLy-7574104.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Feeling You",
        singer: "Raftaar x Harjas",
        path: "https://data.chiasenhac.com/down2/2261/5/2260648-1a60fc23/128/Miss%20America%20-%20Bazzi.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Feeling You",
        singer: "Raftaar x Harjas",
        path: "https://data.chiasenhac.com/down2/2261/5/2260648-1a60fc23/128/Miss%20America%20-%20Bazzi.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Feeling You",
        singer: "Raftaar x Harjas",
        path: "https://data.chiasenhac.com/down2/2261/5/2260648-1a60fc23/128/Miss%20America%20-%20Bazzi.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      },
      {
        name: "Feeling You",
        singer: "Raftaar x Harjas",
        path: "https://data.chiasenhac.com/down2/2261/5/2260648-1a60fc23/128/Miss%20America%20-%20Bazzi.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/169/168374.jpg"
      }
    ],

    render:function(){
        const htmls= this.songs.map((song, index) => {
            return `
                        <div class="song ${index === this.currentIndex ? 'active':' ' }"data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
        })
        $('.playlist').innerHTML=htmls.join('');

    },
    defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function(){
      const _this = this;
      const cd=$('.cd');
      //
    const cdWidth = cd.offsetWidth;
      //  // Xử lý phóng to / thu nhỏ CD
      //   document.onscroll=function(){
      //       const scrollTop = window.scrollY || document.documentElement.scrollTop;
      //       const newCdWidth = cdWidth - scrollTop;

      // cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      // cd.style.opacity = newCdWidth / cdWidth;
      //   }
        // xu li cd quay va dung
        const cdThumbAnimate=cdThumb.animate([
          {
          transform:'rotate(360deg)'
          }],
          {
            duration: 10000, // 10 seconds
            iterations: Infinity

          }
          
      )
      cdThumbAnimate.pause();
      //Xu li khi click play
      playBtn.onclick= function(){
        if (_this.isPlaying){
           audio.pause();
           
        }else{
        audio.play();
        }
        
      }
      // khi bai hat dc play
      audio.onplay= function(){
        _this.isPlaying=true;
        cons.classList.add('playing')
        cdThumbAnimate.play();
      }
      //khi bai hta dung lai
      audio.onpause= function(){
        _this.isPlaying=false;
        cons.classList.remove('playing')
        cdThumbAnimate.pause();
      }
      // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
         //progress bar filled from 0 to current time
         
        
        // Time Count of Audio Current Time
        var e = Math.floor(audio.currentTime);
        var d = e % 60; // number of second
        var b = Math.floor(e / 60); // number of minutes
        if (d < 10) {
          var c = 0;
        } else {
          c = "";
        }
        time_start.textContent = '0' + b + ":" + c + d;

        // Time Count of Audio Duration
        var ee = Math.floor(audio.duration);
        var dd = ee % 60; //number of second
        var bb = Math.floor(ee / 60); //number of minutes
        if (dd < 10) {
          var cc = 0;
        } else {
          cc = "";
        }

        time_count.textContent = '0' + bb + ":" + cc + dd;
        

      }
      if(!audio.duration) {
        time_start.textContent = '-' + ":" + "-";
        time_count.textContent = '-' + ":" + "-";
      }
      // khi next bai hat
      nextBtn.onclick= function(){
        if (_this.isRandom){
          _this.playRandomSong()
        }else{
          _this.nextSong();

        }
      
        audio.play();
      _this.render();
      

      }
    };
    //khi tro lai lai hat truoc
    prevBtn.onclick= function(){
      if (_this.isRandom){
          _this.playRandomSong()
        }else{
          _this.prevSong();

        }
      
        
      audio.play();
      _this.render();
    }
    // Xu li tua bai hat 
    progress.onchange=function(e){
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    }
    //xu li bat tat random bai hat
    randomBtn.onclick= function(){
      _this.isRandom = !_this.isRandom
      randomBtn.classList.toggle('active',_this.isRandom)
      
    }
    // xu li nut quay lai bai hat
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    }
    // lang nghe click vao playlist
    playlist.onclick= function(e){
     //tru thang active ra // closest-char veef element chinh no hoac cha-con cua no neeu ko tim thay tra ve null
     const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
    }
  }

    },
    loadCurrentSong: function(){
      
      heading.textContent= this.currentSong.name;
      cdThumb.style.backgroundImage= `url('${this.currentSong.image}')`
      audio.src = this.currentSong.path;
    },
    nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function(){
    let nextIndex;
    do{
      nextIndex= Math.floor(Math.random()*this.songs.length);
    }while(nextIndex=== this.currentIndex)

    this.currentIndex=nextIndex;
    this.loadCurrentSong();
  },
   setEqualizer:function() {
    for (let i = 0; i < lines.length; i += 1) {
      let line = lines[i];
      line.style.animation = `equalizer ${Math.random() * (3 - 0.3) + 0.3}s ease infinite`;
      line.style.animationDirection = 'alternate-reverse'
    }
  },
  


   
  start:function(){
      //dinh nghia cho cac thuoc tinh cho object
      this.defineProperties();
      //lang nghe, xu li cac su kien (DOM events)
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
        this.setEqualizer();




        


  }
}
    app.start();


