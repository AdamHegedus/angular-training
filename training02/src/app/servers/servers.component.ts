import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created.';
  servers = ['server 1', 'server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },
      1000
    );
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
