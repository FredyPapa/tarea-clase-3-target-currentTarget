import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diferencia entre target y currentTarget';

  viewTarget(event:Event):void{
    const obj = event.target as HTMLInputElement;
    console.log("El evento fue disparado por el objeto "+obj.nodeName);
    alert("El evento fue disparado por el objeto "+obj.nodeName);
  }

  viewCurrentTarget(event:Event):void{
    const obj = event.currentTarget as HTMLInputElement;
    console.log("El objeto cuyo oyente disparó el evento es "+obj.nodeName);
    alert("El objeto cuyo oyente disparó el evento es "+obj.nodeName);
  }

}

