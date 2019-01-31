import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import * as $ from 'jquery'
import 'turn.js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('flipbook') flipBookContainer: ElementRef
  constructor(
    public navCtrl: NavController,
    public platform: Platform) {

  }

  ionViewDidLoad() {
    $(this.flipBookContainer.nativeElement).turn({
      width: '100%',
      height: this.platform.height() - 100,
      display: 'single',
      autoCenter: true
    });
  }

}
