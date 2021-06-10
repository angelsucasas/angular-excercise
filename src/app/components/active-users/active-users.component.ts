import { Component, OnInit,ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http/http.service';
import { User } from 'src/app/model/User/user.interface';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  animations: [
    trigger('smoothEnter', [
      state('start', style({
        opacity: 0
      })),
      transition(':enter', [
        style({ opacity: '0' }),
        animate(2000)
      ])
    ])
  ]
})

export class ActiveUsersComponent implements OnInit {
  private name="";
  public users: User[] = [];
  public gravatarImageURL = "";
  public max = environment.Emails.length;
  public min = 0;
  public breakpoint = 0;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
     this.http.get(environment.userdetailAPIUrl)
      .subscribe(async (data: any)=>{
        this.users=data
        this.users=await this.giveARandomGravatarToUsers(this.users,environment.Emails)
      }
    )
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

  /**
   * Since we dont use all the fields in the user JSON, im using the field "user.company.catchPhrase"
   * to save a random gravatar URL image, this URL are made from the emails in the env
   * @param users result of the GET request
   * @param gravatars All the available emails in the env
   * @returns a json with a gravatar URL image in the user.company.catchPhrase
   */
  async giveARandomGravatarToUsers(users:User[],gravatars:string[]){
    let randomEmail
    let gravatarEmailURL

    for(let user of users){
      randomEmail = gravatars[Math.floor(Math.random()* (this.max - this.min) + this.min)]
      gravatarEmailURL= await environment.gravatarURL+ Md5.hashStr(randomEmail.trim().toLowerCase());
      user.company.catchPhrase = gravatarEmailURL 
    }
    return users
  }

}
