import {Directive, EventEmitter, Input, Output} from 'angular2/angular2';

@Directive({
  selector: '[ngb-collapse]',
  host: {
    'class': 'collapse',
    '[class.in]': '!collapsed',
    '[attr.aria-expanded]': '!collapsed',
    '[style.height.px]': '_height'
  }
})
export class NgbCollapse {
  private _collapsed: boolean;
  private _height: number;
  @Output() collapse: EventEmitter<boolean> = new EventEmitter();

  @Input('ngbCollapse')
  set collapsed(value: boolean) {
    this._collapsed = value;
    this.collapse.next(value);
    this._setHeight();
  }

  get collapsed(): boolean { return this._collapsed; }

  private _setHeight(): void { this._height = this._collapsed ? 0 : undefined; }
}
