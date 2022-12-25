import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { delay, timer } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  page:any;

  constructor( private activatedRoute: ActivatedRoute, private router: Router){
    this.navigatePage();
  }
  
  ngOnInit():void{
    this.page == this.activatedRoute.snapshot.params['page'];
  }

  async navigatePage():Promise<void>{ 
    await new Promise(f => setTimeout(f, 1000));
    this.router.navigate([`${this.activatedRoute.snapshot.params['page']}`]);
  }
}

