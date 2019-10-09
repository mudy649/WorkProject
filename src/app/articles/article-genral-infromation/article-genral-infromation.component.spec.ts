import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGenralInfromationComponent } from './article-genral-infromation.component';

describe('ArticleGenralInfromationComponent', () => {
  let component: ArticleGenralInfromationComponent;
  let fixture: ComponentFixture<ArticleGenralInfromationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGenralInfromationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGenralInfromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
