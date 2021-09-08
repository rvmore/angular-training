import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
  showEditForm = false;

  serverList: { id: number, name: string, ipAddress: string }[] = [
    {
      id: 0,
      name: 'Server 1',
      ipAddress: '10.20.2.225'
    },
    {
      id: 1,
      name: 'Server 2',
      ipAddress: '10.20.2.200'
    },
    {
      id: 2,
      name: 'Server 3',
      ipAddress: '10.20.2.150'
    },
    {
      id: 3,
      name: 'Server 4',
      ipAddress: '10.20.2.80'
    }
  ];

  selectedServer: { id: number, name: string, ipAddress: string } = { id: null, name: '', ipAddress: '' }

  ngOnInit(): void {
  }

  onSelectServer(server) {
    this.showEditForm = true;
    this.selectedServer = server;
  }

  onServerUpdated(event) {
    const id = event.id;

    this.serverList.forEach(server => {
      if (server.id === id) {
        server.ipAddress = event.ipAddress;
        server.name = event.name;
      }
    })
  }
}
