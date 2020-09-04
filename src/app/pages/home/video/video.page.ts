import { Component, OnInit } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
@Component({
  selector: 'app-video',
  templateUrl: 'video.page.html',
  styleUrls: ['video.page.scss']
})
export class videoPage implements OnInit {
  player: any;
  mp4Vid: any;
  loading: any;
  iToggle = true;
  urlStreaming = 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4';
  // urlStreaming = 'https://calcul8-pp.pixelslabs.com/public/uploads/video/video_utilisation_reconstitution_novo_eight.wmv';
  constructor(
    public webView: WebView,
    // tslint:disable-next-line: deprecation
    public fileTransfer: FileTransfer,
    public file: File,
    public nStotage: NativeStorage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) { }
  ngOnInit(): void {
    this.player = document.getElementById('play_video');
    this.mp4Vid = document.getElementById('mp4Source');
    this.mp4Vid.src = this.urlStreaming;

    this.player.load();
    // this.player.play();
  }
  toggle() {
    if (this.iToggle) {
      this.play();
    }
    else {
      this.loadVideo();
    }
  }

  play() {
    this.mp4Vid.src = this.urlStreaming;
    this.player.load();
    this.player.play();
  }

  loadVideo() {
    this.player.pause();
    this.nStotage.getItem('video').then((urlVideo) => {
      this.mp4Vid.src = urlVideo;
      this.player.load();
      this.player.play();
    }, err => {
      this.presentAlert();
    })
      .catch((excp) => {
        console.log('exception open vid ' + excp);
      });
  }


  async download() {
    this.presentLoading();
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    const url = this.urlStreaming;
    fileTransfer.download(url, this.file.dataDirectory + 'stream.mp4', false).then((entry) => {
      this.nStotage.setItem('video', this.webView.convertFileSrc(entry.toURL()));
      // this.loading.onDidDismiss();
      this.mp4Vid.src = entry.toURL();
      this.player.load();
      this.player.play();
      console.log('download complete');

    }, (error) => {
      console.log(error);

      alert('Impossible de télécharger la vidéo! Veuillez essayer plus tard ');
      this.loading.onDidDismiss();
      this.iToggle = true;

    }).catch((err) => {
      console.log(err);

      this.iToggle = true;
      alert('Impossible de télécharger la vidéo! Veuillez essayer plus tard ');
      this.loading.onDidDismiss();
    });
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await this.loading.present();


  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmer le téléchargement',
      message: 'Cette vidéo n\'existe pas! vous souhaitez la télécharger',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            this.iToggle = true;
          }
        },
        {
          text: 'Télécharger',
          handler: () => {
            this.download();
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillLeave() {
    this.player.pause();
  }
}
