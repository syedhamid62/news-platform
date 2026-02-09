import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ad-slot',
  imports: [],
  templateUrl: './ad-slot.html',
  styleUrls: ['./ad-slot.css'],
})
export class AdSlot implements AfterViewInit {
  ngAfterViewInit() {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }
}
