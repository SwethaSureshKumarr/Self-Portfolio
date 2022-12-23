import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects=[{
    img:'../../assets/screenshot/Portfolio.png',
    name:'Portfolio',
    description:'A website to get to know me and my skills better. this portfolio website contains my skills, projects and my interests',
    live:'https://swethasureshkumarr.github.io/ping-comming-soon.github.io/',
    github:'https://github.com/SwethaSureshKumarr/ping-comming-soon.github.io/'
   },{
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
  },{
    img:'../../assets/screenshot/advice-generator.png',
    name:'Advice Generator',
    description:"Random advices are generated and these advices are updated through an API",
    live:'https://swethasureshkumarr.github.io/advicegenerator.github.io/',
    github:'https://github.com/SwethaSureshKumarr/advicegenerator.github.io'
   },{
    img:'../../assets/screenshot/BlenderMovies.png',
    name:'Blender Movies',
    description:"Webpage to display the Blender movies trailer and its reviews",
    live:'https://blmov.netlify.app/',
    github:'https://github.com/SwethaSureshKumarr/BlenderMovies.github.io'
   },{
    img:'../../assets/screenshot/Math-kids.png',
    name:'Math kids',
    description:"this solves all the formula problems for a square triangle and a circle",
    live:'https://math-kid.netlify.app/',
    github:'https://github.com/SwethaSureshKumarr/Math-kids'
   },{
    img:'../../assets/screenshot/Math-kids.png',
    name:'Television Network',
    description:"The information in  television networks are available in this website. This is also a responsive website",
    live:'https://televisionntwrk.netlify.app/',
    github:'https://github.com/SwethaSureshKumarr/TelevisionNetwork'
   },];
}
