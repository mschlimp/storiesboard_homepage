import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail002',
  templateUrl: './detail002.component.html',
  styleUrls: ['./detail002.component.scss']
})
export class Detail002Component {
  constructor(
    private responsive: BreakpointObserver
  ) { }

  isSmall = true;
  isMedium = false;
  isLarge = false;
  ngOnInit() {
  
    this.responsive.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ])
      .subscribe(result => {

        const breakpoints = result.breakpoints;
        
        console.log(breakpoints)
        if (breakpoints[Breakpoints.Small]) {
          console.log("small");
          this.isSmall = true;
          this.isMedium = this.isLarge = false;
        }

        if (breakpoints[Breakpoints.Medium]) {
          console.log("medium");
          this.isMedium = this.isLarge = true;
          this.isSmall =  false;
        }

        if (breakpoints[Breakpoints.Large]) {
          console.log("large");
          this.isLarge = true;
          this.isMedium = this.isSmall = false;
        }
  });
}
}
