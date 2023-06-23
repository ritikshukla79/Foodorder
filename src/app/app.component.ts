import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'foodorder';

  mydishes = [{ dishes: "Matka Paneer", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdTel0fjdCfTEGiMsh5FuTTq2xv1aqvNw2g&usqp=CAU', price: 150, fav: 0, type: "veg" },
  { dishes: "Dal Fry", img: 'https://i.ytimg.com/vi/_RLAr4Mslic/maxresdefault.jpg', price: 100, fav: 0, type: "veg" },
  { dishes: "Chhole", img: 'https://www.whiskaffair.com/wp-content/uploads/2019/04/Chole-2-2.jpg', price: 180, fav: 0, type: "veg" },
  { dishes: "Chicken", img: 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg', price: 320, fav: 0, type: "veg" },
  { dishes: "Kabab", img: 'https://bombaynimcos.com/wp-content/uploads/3-spice-chicken-shami-kabab-recipe-main-photo.jpg', price: 320, fav: 0, type: "veg" },
  { dishes: "Rajma Chawal", img: 'https://images.slurrp.com/prod/articles/r59d6osh0b.webp', price: 200, fav: 0, type: "veg" }, { dishes: "Dam-Allu", img: 'https://i.ytimg.com/vi/VylXmj9L968/maxresdefault.jpg', price: 200, fav: 0, type: "veg" },
  { dishes: "Momos", img: 'https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg', price: 200, fav: 0, type: "veg" }
  ];

  veg = [{ dishes: "Kadai Paneer", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdTel0fjdCfTEGiMsh5FuTTq2xv1aqvNw2g&usqp=CAU', price: 150, fav: 0, type: "veg" },
  { dishes: "Dal Fry", img: 'https://i.ytimg.com/vi/_RLAr4Mslic/maxresdefault.jpg', price: 100, fav: 0, type: "veg" },
  { dishes: "Malai Chhole", img: 'https://www.whiskaffair.com/wp-content/uploads/2019/04/Chole-2-2.jpg', price: 180, fav: 0, type: "veg" },
  { dishes: "Butter Chicken", img: 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg', price: 320, fav: 0, type: "veg" },
  { dishes: "Sahi Kabab", img: 'https://bombaynimcos.com/wp-content/uploads/3-spice-chicken-shami-kabab-recipe-main-photo.jpg', price: 320, fav: 0, type: "veg" },
  { dishes: "Rajma Chawal", img: 'https://images.slurrp.com/prod/articles/r59d6osh0b.webp', price: 200, fav: 0, type: "veg" },
  { dishes: "Dam-Allu", img: 'https://i.ytimg.com/vi/VylXmj9L968/maxresdefault.jpg', price: 200, fav: 0, type: "veg" },
  { dishes: "Momos", img: 'https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg', price: 200, fav: 0, type: "veg" }
  ];

  nonveg = [{ dishes: "Mutton Korma", img: 'https://i.ndtvimg.com/i/2015-03/badam-korma_625x350_41426244081.jpg', price: 250, fav: 0, type: "nonveg" },
  { dishes: "Grilled Chicken Escalope", img: 'https://i.ndtvimg.com/i/2015-12/grilled-chicken-625_625x350_71451368942.jpg', price: 370, fav: 0, type: "nonveg" },
  { dishes: "Mutton Biryani", img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg', price: 580, fav: 0, type: "nonveg" },
  { dishes: "Butter Chicken", img: 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg', price: 320, fav: 0, type: "nonveg" },
  { dishes: "Pina Colada", img: 'https://i.ndtvimg.com/i/2015-02/pork_625x350_81424765044.jpg', price: 320, fav: 0, type: "nonveg" },
  { dishes: "Malabar Fish Biryani", img: 'https://i.ndtvimg.com/i/2016-11/biryani-620_620x350_41478678907.jpg', price: 260, fav: 0, type: "nonveg" },
  { dishes: "Chicken 65", img: 'https://i.ndtvimg.com/i/2015-07/chicken-65_625x350_61436162562.jpg', price: 260, fav: 0, type: "nonveg" },
  { dishes: "Nihari Gosht", img: 'https://i.ndtvimg.com/i/2015-09/nihari_625x350_41443159772.jpg', price: 260, fav: 0, type: "nonveg" }

  ];

  drinks = [{ dishes: "Cosmopolitan", img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px', price: 150, fav: 0, type: "drink" },
  { dishes: "Mojito", img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375', price: 100, fav: 0, type: "drink" },
  { dishes: "Mai Tai", img: 'https://static.onecms.io/wp-content/uploads/sites/19/2008/11/15/MangoMaiTai_L.jpg', price: 180, fav: 0, type: "drink" },
  { dishes: "Mint Julep", img: 'https://www.hangoverweekends.co.uk/media/15504/bulleitmintjulep_l.jpg?width=300&height=300', price: 320, fav: 0, type: "drink" },
  { dishes: "Caipirinha", img: 'https://www.hangoverweekends.co.uk/media/15503/caipirinha-cocktail.jpg?width=400&height=300', price: 320, fav: 0, type: "drink" },
  { dishes: "Margarita", img: 'https://www.hangoverweekends.co.uk/media/15502/margarita.jpg?width=298px&height=412px', price: 200, fav: 0, type: "drink" },
  { dishes: "Pina Colada", img: 'https://www.hangoverweekends.co.uk/media/15501/pina_colada_cocktail.png?width=243&height=350', price: 200, fav: 0, type: "drink" },
  { dishes: "Californication", img: 'https://www.hangoverweekends.co.uk/media/15500/californication-cocktail.jpg?width=408px&height=256px', price: 200, fav: 0, type: "drink" }
  ];

  constructor() {
  }

  cart: any = [];
  favourite: any = [];
  lnk: string = "";


  addtodishes($event: any) {
    let obj = { dishes: $event.dishes, img: $event.img, price: $event.price, fav: 0, type: $event.type };
    if (obj.dishes == '' || obj.img == '') {
      alert('please enter the dish and image');
    }
    else if (obj.type == "veg") {

      this.veg.push(obj);

    }
    else if (obj.type == "nonveg") {
      this.nonveg.push(obj);

    }
    else {
      this.drinks.push(obj);
    }

  }


}

