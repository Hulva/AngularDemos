import { Component } from '@angular/core';
import { Cube } from './class/cube';
import { CubeStyle } from './class/cube-style';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  cubes: Array<Cube>;

  ngOnInit(): void {
    this.cubes = [];
  }

  drop(event: DragEvent) {
    console.log('drop', event);
    event.preventDefault();
    // data的构成 id-x-y
    const data = event.dataTransfer.getData('data').split('-');
    const lastX = data[1];
    const lastY = data[2];

    // const myimg = document.getElementById(data[0]);

    // const lastTop = myimg.style ? myimg.style.top.substring(0, myimg.style.top.length - 2) : '0px';
    // const lastLeft = myimg.style ? myimg.style.left.substring(0, myimg.style.left.length - 2) : '0px';

    this.cubes.forEach(cube => {
      if (cube.id.toString() === data[0]) {
        const lastLeft = cube.style ? cube.style.left.substring(0, cube.style.left.length - 2) : '0px';
        const lastTop = cube.style ? cube.style.top.substring(0, cube.style.top.length - 2) : '0px';
        cube.style.left = parseFloat(lastLeft) + (event.x - parseFloat(lastX)) + 'px';
        cube.style.top = parseFloat(lastTop) + (event.y - parseFloat(lastY)) + 'px';
      }
    });

    // myimg.style.left = parseFloat(lastLeft) + (event.x - parseFloat(lastX)) + 'px';
    // this.mystyle.left = parseFloat(lastLeft) + (event.x - parseFloat(lastX)) + 'px';
    // myimg.style.top = parseFloat(lastTop) + (event.y - parseFloat(lastY)) + 'px';
    // this.mystyle.top = parseFloat(lastTop) + (event.y - parseFloat(lastY)) + 'px';
    // console.log(myimg);
  }

  allowDrop(event: DragEvent) {
    console.log('allowDrop', event);
    event.preventDefault();
  }

  dragStart(event: DragEvent, cubeID: number) {
    console.log('drag', event);
    const target = <HTMLElement>event.target;
    event.dataTransfer.setData('data', cubeID + '-' + event.x + '-' + event.y);
  }

  addCube() {
    const cubeID = this.cubes.length;
    this.cubes.push(new Cube(cubeID, {
                                        position: 'relative',
                                        width: '50px',
                                        height: '50px',
                                        top: cubeID * 10 + 'px',
                                        left: cubeID * 10 + 'px',
                                        border: '1px solid #777',
                                        resize: 'both',
                                        overflow: 'auto',
                                        opacity: 0.4
                                      }));
  }

  removeCube(cubeID: number) {
    const oldCubes = this.cubes.slice();
    const newCubes = [];
    oldCubes.forEach(cube => {
      if (!(cube.id === cubeID)) {
        newCubes.push(cube);
      }
    });
    this.cubes = newCubes;
  }
}
