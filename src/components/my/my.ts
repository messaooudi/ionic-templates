import { Component, Input, ElementRef, ViewChildren, QueryList, Renderer2, ViewChild, Output, EventEmitter } from '@angular/core';
import { AfterViewInit, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Button } from 'ionic-angular/components/button/button';

@Component({
  selector: 'my',
  templateUrl: 'my.html'
})
export class MyComponent implements AfterViewInit, OnInit {

  @Input() default: number = -1;
  @Input() data: Array<string>;
  @Output() select: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild(Button, { read: ElementRef }) overlay: ElementRef;
  @ViewChildren(Button, { read: ElementRef }) items: QueryList<ElementRef>
  private nativeItems: HTMLElement[];
  selectedIndex: number = -1;
  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.nativeItems = this.items.map(item => item.nativeElement);
    this.renderer.setStyle(this.overlay.nativeElement, 'left', '0px')
    if (this.default >= 0 && this.default < this.data.length) {
      setTimeout(_ => this.click(1 * this.default + 1), 300);
    }
  }

  ngOnInit(): void {

  }

  click(index: number) {
    this.selectedIndex = index - 1;
    this.renderer.setStyle(this.overlay.nativeElement, 'visibility', `visible`)
    this.renderer.setStyle(this.overlay.nativeElement, 'left', `${this.nativeItems[index].offsetLeft - 5}px`)
    this.renderer.setStyle(this.overlay.nativeElement, 'width', `${this.nativeItems[index].offsetWidth}px`)
    this.nativeItems[index].scrollIntoView({ behavior: "smooth" });

    this.select.emit(this.selectedIndex);
  }
}
