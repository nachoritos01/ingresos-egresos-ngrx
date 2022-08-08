import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit, OnDestroy {
  username: string | undefined;
  userSubs$!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnDestroy(): void {
    this.userSubs$.unsubscribe();
  }

  ngOnInit() {
    this.username = this.authService.user.nombre;
    this.userSubs$ = this.store
      .select('user')
      .pipe(
        filter((auth) => {
          return auth.user != null;
        })
      )
      .subscribe(({ user }) => (this.username = user?.nombre));
  }
  logout() {
    this.authService.logout().then((response) => {
      this.router.navigate(['/login']);
    });
  }
}
