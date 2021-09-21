import { Component, OnInit } from '@angular/core';

const dati = [
  {
    name: "Work",
    hour: "32",
    week: "36",
    image: "./../../assets/images/icon-work.svg",
    color: "hsl(15, 100%, 70%)"
  },
  {
    name: "Play",
    hour: "10",
    week: "8",
    image: "./../../assets/images/icon-play.svg",
    color: "hsl(195, 74%, 62%)"
  },
  {
    name: "Study",
    hour: "4",
    week: "7",
    image: "./../../assets/images/icon-study.svg",
    color: "hsl(348, 100%, 68%)"
  },
  {
    name: "Exercise",
    hour: "4",
    week: "5",
    image: "./../../assets/images/icon-exercise.svg",
    color: "hsl(145, 58%, 55%)"
  },
  {
    name: "Social",
    hour: "5",
    week: "10",
    image: "./../../assets/images/icon-social.svg",
    color: "hsl(264, 64%, 52%)"
  },
  {
    name: "Self Care",
    hour: "2",
    week: "2",
    image: "./../../assets/images/icon-self-care.svg",
    color: "hsl(43, 84%, 65%)"
  }
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dati = dati;

  constructor() { }

  ngOnInit(): void {

  }

}
