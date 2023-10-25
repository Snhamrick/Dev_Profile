import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  public emailStatus: boolean;
  public submitted: boolean;
  public emailResponse = '';
  public formError = '';
  private templateString = environment.templateString;
  private publicKey = environment.publicKey;


  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.emailStatus = false;
    this.submitted = false;
  }

  emailForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });




  sendEmail() {
    this.submitted = true;
    const that = this;
    if (this.emailForm.valid) {
      let templateParams = this.emailForm.value;
      emailjs.send('default_service', this.templateString, templateParams, this.publicKey)
      .then(function(res) {
        that.emailStatus = true;
        that.formError = '';
        that.emailResponse = "Your email has been sent succesfully"
        console.log(res.status, res.text);
      }, function(error) {
        that.emailStatus = false;
        that.formError = ''
        that.emailResponse = "There was a problem sending your email, please try again later"
        console.log(error.message);
      });
    } else {
      this.formError = 'All fields must be completed';
    }
  }
}
