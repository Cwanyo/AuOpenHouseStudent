import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { Loading } from 'ionic-angular/components/loading/loading';

import { ViewFacultyPage } from '../view-faculty/view-faculty';

import { Faculty } from './../../interface/faculty';

import { RestApiProvider } from './../../providers/rest-api/rest-api';

/**
 * Generated class for the BulletinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bulletin',
  templateUrl: 'bulletin.html',
})
export class BulletinPage {

  private loader: Loading;

  private listOfFaculties;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private restApiProvider: RestApiProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ngOnInit(){
    this.getListOfFaculties();
  }

  getListOfFaculties(){
    this.presentLoading();
    this.restApiProvider.getFaculties()
    .then(result => {
      this.loader.dismiss();
      this.listOfFaculties = result;
    })
    .catch(error =>{
      this.loader.dismiss();
      console.log("ERROR API : getFaculties",error);
    })
  }

  facultyDetails(fid: number){
    console.log("facultyDetails", fid);
    let faculty: Faculty = this.listOfFaculties.find(i => i.FID == fid);

    this.navCtrl.push(ViewFacultyPage, {faculty: faculty});
  }

    presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

}
