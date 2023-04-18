import { Component, OnInit } from '@angular/core';
import { IterList } from 'src/app/core/classes';

@Component({
  selector: 'app-patron-iter',
  templateUrl: './patron-iter.component.html',
  styleUrls: ['./patron-iter.component.scss']
})
export class PatronIterComponent implements OnInit {

  ngOnInit(): void {

    const list = new IterList('ram', 'Rom', 'SSD', 'Graphics Card');

    while(list.hasNext()){
      console.log(list.next())
    }

    console.log(list.get(3))
    
  }

}
