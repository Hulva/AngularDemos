import { MyImagePipePipe } from './my-image-pipe.pipe';

describe('MyImagePipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyImagePipePipe();
    expect(pipe).toBeTruthy();
  });
});
