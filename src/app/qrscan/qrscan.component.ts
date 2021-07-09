import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeFormat, ResultMetadataType } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.scss']
})
export class QrscanComponent implements OnInit {

  public scannerEnabled: boolean = true;
  public information: string = "No code information has been detected. Zoom in on a QR code to scan.";
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  @ViewChild
  (ZXingScannerComponent) qrscanner: ZXingScannerComponent;
  
  
  constructor() {
    var qrInput:string = "qrInput";
  }

  ngOnInit(): void {
    console.log("Scanner - Autostart");

    this.qrscanner.enable;
    this.qrscanner.autostart;
    
    console.log("SubscribeToScanner");

    this.qrscanner.scanSuccess.subscribe(result => {
      console.log(result);
    });

  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;  
    this.information = $event;
  }
  
  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No code information has been detected. Zoom in on a QR code to scan.";
  }

}
