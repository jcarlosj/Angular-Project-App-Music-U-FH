import { WithoutImagePipe } from './without-image.pipe';

describe('WithoutImagePipe', () => {
  it('create an instance', () => {
    const pipe = new WithoutImagePipe();
    expect(pipe).toBeTruthy();
  });
});
