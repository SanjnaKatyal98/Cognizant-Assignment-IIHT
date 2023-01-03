import { RepeatDataPipe } from "./repeatData.pipe";
describe('RepeatDataPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatDataPipe();
    expect(pipe).toBeTruthy();
  });
  it('testing repeat pipe', () => {
    const pipe = new RepeatDataPipe();
    const data = pipe.transform("sanjna shahid hussain",3);
    expect(data).toEqual("sanjna shahid hussainsanjna shahid hussainsanjna shahid hussain");
  });
});