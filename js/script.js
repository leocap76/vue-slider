var app = new Vue(
  {
    el:'#root',
    data:{
      imageIndex: 0,
      images: [
        "https://www.keblog.it/wp-content/uploads/2019/08/foto-manipolazioni-surreali-animali-ronald-ong-7.jpg",
        "https://www.liveversilia.it/wp-content/uploads/2018/11/LIGHTNESS_BART-HERREMAN_OpenOneArtGallery-e1542883730498.jpg",
        "https://www.objectsmag.it/wp-content/uploads/2018/12/gli-animali-surreali-di-julien-tabet-18-840x840.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi-VbKiLC11k3sJJttmX9ZobbsGfCoqdTkQ&usqp=CAU",
      ]

    },
    methods:{
      nextimage:function(){
        this.imageIndex++;
        if (this.imageIndex == this.imageIndex.length) {
          this.imageIndex = 0;

        }

      },
      previmage:function(){
        this.imageIndex--;
        if (this.imageIndex == -1) {
          this.imageIndex = this.imageIndex.length -1;
        }

      }

    }
  });
