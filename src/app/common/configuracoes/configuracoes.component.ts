import { Component, OnInit } from '@angular/core';
import {
  Extension,
  ExtensionsService,
} from '../../services/extensions.service';
import { ExtensionComponent } from '../../shared/extension/extension.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracoes',
  imports: [ExtensionComponent, CommonModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss',
})
export class ConfiguracoesComponent implements OnInit {
  extensions: Extension[] = [];
  filteredExtensions: Extension[] = [];
  activeFilter: 'all' | 'active' | 'inactive' = 'all';

  constructor(private extensionService: ExtensionsService) {}

  //variaveis
  isWhiteMode = false;

  ngOnInit(): void {
    this.extensionService.getExtensions().subscribe((data) => {
      this.extensions = data.map((ext) => ({ ...ext, isActive: true }));
      this.applyFilter();
    });
  }

  applyFilter(): void {
    if (this.activeFilter === 'active') {
      this.filteredExtensions = this.extensions.filter((ext) => ext.isActive);
    } else if (this.activeFilter === 'inactive') {
      this.filteredExtensions = this.extensions.filter((ext) => !ext.isActive);
    } else {
      this.filteredExtensions = [...this.extensions];
    }
  }

  setFilter(filter: 'all' | 'active' | 'inactive') {
    this.activeFilter = filter;
    this.applyFilter();
  }

  removeExtension(extension: Extension) {
    this.extensions = this.extensions.filter(e => e !== extension);
    this.applyFilter();
  }

  toggleExtensionStatus(extension: Extension, value: boolean) {
    extension.isActive = value;
    this.applyFilter();
  }

  toggleTheme() {
    this.isWhiteMode = !this.isWhiteMode;
    document.body.classList.toggle('white-mode', this.isWhiteMode);
  }
  
}


