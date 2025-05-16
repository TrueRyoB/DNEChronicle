describe('TitleComponent', () => {
    it('should render application title as <h1>', async () => {
      // テストアプリケーションのセットアップ
      await TestBed.configureTestingModule({
        imports: [TitleComponent],
      }).compileComponents();
      // コンポーネントインスタンスの生成
      const fixture = TestBed.createComponent(TitleComponent);
      const element = fixture.nativeElement as HTMLElement;
      // DOMのアサーション
      expect(element.querySelector('h1')?.textContent).toContain('My Applciation');
    });
});

describe('TitleComponent', () => {
    it('should render application title as <h1>', async () => {
        await TestBed.configureTestingModule({
            imports: [TitleComponent],
        }).compileComponents();

        const fixture = TestBed.createComponent(TitleComponent);
        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('h1')?.textContent).toContain('My App');
    }
});
