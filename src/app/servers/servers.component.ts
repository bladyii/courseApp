import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created';
  serverName='Enter Server Name';
  userName='';
  updateUserName = false;


  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is: '+this.serverName;
    this.allowNewServer = false;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(){
    this.userName = "";
    this.updateUserName = false;

  }
      onButtonUpdateUserName(){
        if(this.userName.length>0)
        this.updateUserName = true;
        else
        this.updateUserName = false;   
  }
}
