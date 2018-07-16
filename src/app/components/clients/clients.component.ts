import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  breakpoint: number;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((client: any) => {
      this.clients = client.results;
    });
    this.breakpoint = window.innerWidth <= 1200 ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 1200 ? 1 : 2;
  }
}
