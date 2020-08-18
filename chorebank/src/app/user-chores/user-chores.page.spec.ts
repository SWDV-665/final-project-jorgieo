import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserChoresPage } from './user-chores.page';

describe('UserChoresPage', () => {
  let component: UserChoresPage;
  let fixture: ComponentFixture<UserChoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserChoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
