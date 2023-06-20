import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  affAcount=false

  title = 'heartConsultant';
  ngOnInit(): void {
    
  }
  aff(){
    this.affAcount=true
  }
  
}
