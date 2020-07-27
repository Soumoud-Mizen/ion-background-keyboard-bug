import { Component } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-novaeight',
  templateUrl: 'novaeight.page.html',
  styleUrls: ['novaeight.page.scss']
})
export class NovaeightPage {

  constructor(
    public docViewer: DocumentViewer  ) {}

    openPdf(){
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      
      this.docViewer.viewDocument('assets/files/cin.pdf', 'application/pdf', options)
    }

}
