import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faCheck, faCheckCircle, faS} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  fCheck= faCheckCircle;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    
  }

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
  },{
    img:'../../assets/Icons/angular-icon.png',
    name:'Angular'
  }
];
 projects=[{
  img:'../../assets/screenshot/Ping-coming-soon.png',
  name:'Ping Coming Soon',
  description:'This is a solution to the Ping coming soon page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects',
  live:'https://swethasureshkumarr.github.io/ping-comming-soon.github.io/',
  github:'https://github.com/SwethaSureshKumarr/ping-comming-soon.github.io/'
 },{
 img:'../../assets/screenshot/Pocket-notes.png',
 name:'Pocket Notes',
 description:"If you're looking for a way to keep track of notes and ideas, this notes application might be the perfect solution for you.",
 live:'https://swethasureshkumarr.github.io/ping-comming-soon.github.io/',
 github:'https://github.com/SwethaSureshKumarr/ping-comming-soon.github.io/'
}];


}

