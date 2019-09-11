import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variableName = "API";
  isClicked:any;
  all_tasks : any;
  one_task: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
    this.isClicked = false;
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks in our component!", data);
      this.all_tasks = data;  
      this.isClicked = true;
    });
  }


  onButtonClickParams(i): void { 
      console.log(`Click event is working with num param: ${i}`);
      // let observable = this._httpService.getOneTask(num);
      this.one_task = this.all_tasks[i];
      console.log(this.one_task);

  }



  
}
