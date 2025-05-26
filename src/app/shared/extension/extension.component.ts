import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss'],
  imports: [CommonModule],
})
export class ExtensionComponent {
  @Input() logo!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() isActive = false;
  @Input() isWhiteMode = false;

  @Output() remove = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<boolean>();

  onToggleChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.toggle.emit(checked);
  }
}
