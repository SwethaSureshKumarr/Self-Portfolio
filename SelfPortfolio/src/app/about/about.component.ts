import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  technologies=[{
    img:'../../assets/Icons/html-5.png',
    name:'HTML'
  },{
    img:'../../assets/Icons/css-3.png',
    name:'CSS'
  },{
    img:'../../assets/Icons/js.png',
    name:'JavaScript'
  },{
    img:'../../assets/Icons/sass.png',
    name:'SCSS/SASS'
  }
];
}
