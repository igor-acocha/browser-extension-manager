import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfiguracoesComponent } from "./common/configuracoes/configuracoes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ConfiguracoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'browser-extension-manager';
}
