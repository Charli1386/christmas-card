import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSectionOne') mainSectionView?: ElementRef;
  @ViewChild('subSection') subSectionView?: ElementRef;

  constructor(private route: ActivatedRoute, private title: Title) {}

  currentCard = this.route.snapshot.paramMap.get('id');

  blankaImgs = [1, 2, 3].map((n) => `/assets/card/blanka/blanka${n}.jpg`);
  oliwiaImgs = [1, 2, 3].map((n) => `/assets/card/oliwia/oliwia${n}.jpg`);

  /*
    SPECIAL EFFECTS
  */
  isSubSection: boolean = false;
  isSectionHighlight: boolean = false;
  isRatingFill: boolean = false;

  ngOnInit(): void {
    if (this.currentCard == 'blanka') this.title.setTitle('Blanka');
    else this.title.setTitle('Oliwia');
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    const mainSectionRef = this.mainSectionView?.nativeElement;
    const subSectionRef = this.subSectionView?.nativeElement;
    var screenY = window.scrollY;
    this.isSectionHighlight =
      screenY >=
        mainSectionRef.offsetHeight - mainSectionRef.offsetHeight * 0.45 &&
      screenY <= mainSectionRef.offsetHeight + subSectionRef.offsetHeight
        ? true
        : false;

    this.isSubSection =
      screenY >= mainSectionRef.offsetHeight &&
      screenY <= mainSectionRef.offsetHeight + subSectionRef.offsetHeight
        ? true
        : false;

    this.isRatingFill =
      screenY >= mainSectionRef.offsetHeight - mainSectionRef.offsetHeight * 0.3
        ? true
        : false;
  };
}
