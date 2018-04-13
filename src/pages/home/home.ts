import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

  }

scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
   console.log('Barcode data', barcodeData);
  }).catch(err => {
      console.log('Error', err);
  });
}

}
