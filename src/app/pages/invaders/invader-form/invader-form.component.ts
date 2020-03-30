import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InvadersService } from 'src/app/services/invaders.service';
import { Invader } from 'src/app/models/invaders.model';

@Component({
  selector: 'app-invader-form',
  templateUrl: './invader-form.component.html',
  styleUrls: ['./invader-form.component.scss']
})
export class InvaderFormComponent implements OnInit {

  invaderForm: FormGroup;
  invader: Invader;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private invadersService: InvadersService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.invaderForm = this.formBuilder.group({
      code: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSaveInvader() {
    const code = this.invaderForm.get('code').value;
    const city = this.invaderForm.get('city').value;
    const invader = new Invader(code, city);
    this.invadersService.createNewInvader(invader);
    this.router.navigate(['/invaders']);
  }

}
