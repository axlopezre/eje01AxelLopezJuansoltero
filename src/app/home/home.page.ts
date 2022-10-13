import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos= [];


  constructor() {
    this.photos =[
      {
          name:"Foto 1",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laudantium laborum error nihil quia quidem saepe dicta atque temporibus, aut quam recusandae veniam dignissimos modi, voluptatum deleniti hic necessitatibus consequatur.",
          url:"https://picsum.photos/200/300"
      },
      {
        name:"Foto 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laudantium laborum error nihil quia quidem saepe dicta atque temporibus, aut quam recusandae veniam dignissimos modi, voluptatum deleniti hic necessitatibus consequatur.",
        url:"https://picsum.photos/id/240/200/300"
      },
      {
        name:"Foto 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laudantium laborum error nihil quia quidem saepe dicta atque temporibus, aut quam recusandae veniam dignissimos modi, voluptatum deleniti hic necessitatibus consequatur.",
        url:"https://picsum.photos/200/300/?blur=2"
      }
    ]
  }

}
