import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-add-server',
    templateUrl: './add-server.component.html',
    styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit, OnChanges {
    @Input() server: { id: number, name: string, ipAddress: string } = { id: null, name: '', ipAddress: '' };
    @Output() updateServer = new EventEmitter<{ id: number, name: string, ipAddress: string }>();

    serverObj: { id: number, name: string, ipAddress: string } = { id: null, name: '', ipAddress: '' };

    ngOnInit(): void {
        // this.serverObj = this.server;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.server) {
            this.serverObj.id = this.server.id;
            this.serverObj.name = this.server.name;
            this.serverObj.ipAddress = this.server.ipAddress;
        }
    }

    onUpdateServer() {
        this.updateServer.emit(this.serverObj);
    }

}
