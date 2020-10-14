import { Component } from '@angular/core';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-novaeight',
  templateUrl: 'novaeight.page.html',
  styleUrls: ['novaeight.page.scss']
})
export class NovaeightPage {

  constructor(
    public service: Service) { }

}
